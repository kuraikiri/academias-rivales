'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/stores/authStore';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          🏰 Academias Rivales
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Compite, Conquista y Domina el Reino Arcano
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all text-lg"
          >
            Comenzar Aventura
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-all text-lg"
          >
            Iniciar Sesión
          </Link>
        </div>
        <div className="mt-12 text-gray-400 text-sm">
          <p>5 Academias · Minijuegos · Guerras Épicas</p>
        </div>
      </div>
    </div>
  );
}
