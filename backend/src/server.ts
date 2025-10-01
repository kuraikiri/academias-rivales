import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PORT } from './utils/constants';

// Cargar variables de entorno
dotenv.config();

// Crear aplicación Express
const app = express();

// Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Academias Rivales API is running',
    timestamp: new Date().toISOString(),
  });
});

// Importar rutas
import authRoutes from './routes/auth.routes';

// Usar rutas
app.use('/api/auth', authRoutes);

// Manejo de errores global
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 Prisma Studio: http://localhost:5555`);
  console.log(`🎮 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
