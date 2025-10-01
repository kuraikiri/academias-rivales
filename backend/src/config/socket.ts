import { Server as HTTPServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants';

export interface AuthenticatedSocket {
  id: string;
  userId: string;
  username: string;
  academyId: string | null;
}

export const createSocketServer = (httpServer: HTTPServer): SocketIOServer => {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
      credentials: true,
    },
  });

  // Middleware de autenticación para todos los sockets
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;

    if (!token) {
      return next(new Error('Token no proporcionado'));
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as {
        userId: string;
        username: string;
        academyId: string | null;
      };

      // Agregar datos del usuario al socket
      (socket as any).userId = decoded.userId;
      (socket as any).username = decoded.username;
      (socket as any).academyId = decoded.academyId;

      next();
    } catch (error) {
      next(new Error('Token inválido'));
    }
  });

  // Conexión principal
  io.on('connection', (socket) => {
    const userId = (socket as any).userId;
    const username = (socket as any).username;

    console.log(`✅ Usuario conectado: ${username} (${userId})`);

    // Unirse a la sala de su academia si tiene una
    const academyId = (socket as any).academyId;
    if (academyId) {
      socket.join(`academy:${academyId}`);
      console.log(`🏰 ${username} se unió a academy:${academyId}`);
    }

    socket.on('disconnect', () => {
      console.log(`❌ Usuario desconectado: ${username}`);
    });
  });

  return io;
};

export default createSocketServer;
