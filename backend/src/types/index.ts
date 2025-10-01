import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    username: string;
    academyId: string | null;
  };
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}
