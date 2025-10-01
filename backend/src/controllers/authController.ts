import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import prisma from '../config/database';
import { JWT_SECRET, JWT_EXPIRES_IN, BCRYPT_ROUNDS } from '../utils/constants';

// Schemas de validación con Zod
const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validar datos de entrada
    const validatedData = registerSchema.parse(req.body);

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: validatedData.email },
          { username: validatedData.username },
        ],
      },
    });

    if (existingUser) {
      res.status(400).json({
        error: 'Usuario ya existe',
        message: existingUser.email === validatedData.email
          ? 'El email ya está registrado'
          : 'El nombre de usuario ya está en uso',
      });
      return;
    }

    // Hashear password
    const passwordHash = await bcrypt.hash(validatedData.password, BCRYPT_ROUNDS);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        username: validatedData.username,
        email: validatedData.email,
        passwordHash,
      },
      select: {
        id: true,
        username: true,
        email: true,
        level: true,
        xp: true,
        academyId: true,
        createdAt: true,
      },
    });

    // Generar JWT
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        academyId: user.academyId,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user,
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        error: 'Datos inválidos',
        details: error.errors,
      });
      return;
    }

    console.error('Error en register:', error);
    res.status(500).json({
      error: 'Error al registrar usuario',
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validar datos de entrada
    const validatedData = loginSchema.parse(req.body);

    // Buscar usuario
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
      include: {
        academy: {
          select: {
            id: true,
            name: true,
            color: true,
          },
        },
      },
    });

    if (!user) {
      res.status(401).json({
        error: 'Credenciales inválidas',
      });
      return;
    }

    // Verificar password
    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      res.status(401).json({
        error: 'Credenciales inválidas',
      });
      return;
    }

    // Actualizar último acceso
    await prisma.user.update({
      where: { id: user.id },
      data: { lastActiveAt: new Date() },
    });

    // Generar JWT
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        academyId: user.academyId,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Excluir passwordHash de la respuesta
    const { passwordHash: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login exitoso',
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        error: 'Datos inválidos',
        details: error.errors,
      });
      return;
    }

    console.error('Error en login:', error);
    res.status(500).json({
      error: 'Error al iniciar sesión',
    });
  }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: 'Token no proporcionado' });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      username: string;
      academyId: string | null;
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        academy: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    // Excluir passwordHash
    const { passwordHash: _, ...userWithoutPassword } = user;

    res.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Error en getMe:', error);
    res.status(401).json({ error: 'Token inválido' });
  }
};
