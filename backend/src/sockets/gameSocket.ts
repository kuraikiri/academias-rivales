import { Server } from 'socket.io';

export const setupGameNamespace = (io: Server) => {
  const gameNamespace = io.of('/game');

  gameNamespace.on('connection', (socket) => {
    const userId = (socket as any).userId;
    const username = (socket as any).username;

    console.log(`🎮 ${username} conectado al namespace /game`);

    // Evento: Unirse a una cola de matchmaking
    socket.on('game:join-queue', (data: { gameType: string }) => {
      console.log(`🎯 ${username} se unió a cola de ${data.gameType}`);

      socket.join(`queue:${data.gameType}`);

      // TODO: Implementar lógica de matchmaking
      socket.emit('game:queue-joined', {
        gameType: data.gameType,
        position: 1,
      });
    });

    // Evento: Salir de la cola
    socket.on('game:leave-queue', (data: { gameType: string }) => {
      console.log(`🚪 ${username} salió de cola de ${data.gameType}`);
      socket.leave(`queue:${data.gameType}`);

      socket.emit('game:queue-left', {
        gameType: data.gameType,
      });
    });

    socket.on('disconnect', () => {
      console.log(`❌ ${username} desconectado de /game`);
    });
  });

  return gameNamespace;
};
