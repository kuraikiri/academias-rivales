import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../lib/api';
import { AuthState, User } from '../types';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user: User | null) => {
        set({ user, isAuthenticated: !!user });
      },

      setToken: (token: string | null) => {
        set({ token });
        if (token) {
          localStorage.setItem('token', token);
        } else {
          localStorage.removeItem('token');
        }
      },

      register: async (username: string, email: string, password: string) => {
        try {
          set({ isLoading: true });
          const response = await api.post('/api/auth/register', {
            username,
            email,
            password,
          });

          const { user, token } = response.data;

          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });

          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        } catch (error: any) {
          set({ isLoading: false });
          throw new Error(error.response?.data?.message || 'Error al registrar');
        }
      },

      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true });
          const response = await api.post('/api/auth/login', {
            email,
            password,
          });

          const { user, token } = response.data;

          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });

          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
        } catch (error: any) {
          set({ isLoading: false });
          throw new Error(error.response?.data?.error || 'Error al iniciar sesión');
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
