import { Server } from 'socket.io';

export const setupAcademyNamespace = (io: Server) => {
  const academyNamespace = io.of('/academy');

  academyNamespace.on('connection', (socket) => {
    const userId = (socket as any).userId;
    const username = (socket as any).username;
    const academyId = (socket as any).academyId;

    console.log(`🏰 ${username} conectado al namespace /academy`);

    if (academyId) {
      socket.join(`academy:${academyId}`);

      // Notificar a la academia que un miembro se conectó
      socket.to(`academy:${academyId}`).emit('academy:member-online', {
        userId,
        username,
      });
    }

    // Evento: Obtener recursos de la academia
    socket.on('academy:get-resources', () => {
      // TODO: Obtener recursos de la BD
      socket.emit('academy:resources-update', {
        crystals: 1000,
        essences: 500,
        mentalEnergy: 5000,
      });
    });

    socket.on('disconnect', () => {
      console.log(`❌ ${username} desconectado de /academy`);

      if (academyId) {
        socket.to(`academy:${academyId}`).emit('academy:member-offline', {
          userId,
          username,
        });
      }
    });
  });

  return academyNamespace;
};
