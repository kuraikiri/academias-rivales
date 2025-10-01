'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/src/stores/authStore';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-xl">Cargando...</div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">🏰 Academias Rivales</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">👤 {user.username}</span>
              <Button variant="secondary" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Perfil del Usuario */}
          <Card title="Tu Perfil">
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Nombre de Usuario</p>
                <p className="text-white font-semibold text-lg">{user.username}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">{user.email}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Nivel</p>
                  <p className="text-white font-bold text-2xl">{user.level}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">XP</p>
                  <p className="text-white font-bold text-2xl">{user.xp}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Academia */}
          <Card title="Tu Academia">
            {user.academy ? (
              <div className="space-y-4">
                <div
                  className="h-24 rounded-lg flex items-center justify-center text-3xl font-bold"
                  style={{ backgroundColor: user.academy.color }}
                >
                  {user.academy.name}
                </div>
                <p className="text-gray-400 text-center">
                  Miembro de la academia {user.academy.name}
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">Aún no perteneces a ninguna academia</p>
                <Button>Elegir Academia</Button>
              </div>
            )}
          </Card>

          {/* Estadísticas */}
          <Card title="Estadísticas">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Partidas Jugadas</span>
                <span className="text-white font-bold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Victorias</span>
                <span className="text-green-500 font-bold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Derrotas</span>
                <span className="text-red-500 font-bold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Racha Actual</span>
                <span className="text-yellow-500 font-bold">0</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Coming Soon */}
        <div className="mt-8">
          <Card>
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold text-white mb-4">🚧 En Desarrollo</h3>
              <p className="text-gray-400 mb-6">
                Pronto podrás jugar minijuegos, competir con otras academias y mucho más...
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span>✅ Autenticación</span>
                <span>🔄 Minijuegos</span>
                <span>🔄 Academias</span>
                <span>🔄 Votaciones</span>
                <span>🔄 Guerras</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
