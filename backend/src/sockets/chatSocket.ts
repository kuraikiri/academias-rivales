import { Server } from 'socket.io';

export const setupChatNamespace = (io: Server) => {
  const chatNamespace = io.of('/chat');

  chatNamespace.on('connection', (socket) => {
    const userId = (socket as any).userId;
    const username = (socket as any).username;
    const academyId = (socket as any).academyId;

    console.log(`💬 ${username} conectado al namespace /chat`);

    if (academyId) {
      socket.join(`academy:${academyId}`);
    }

    // Evento: Enviar mensaje
    socket.on('chat:send-message', (data: { message: string; room?: string }) => {
      const room = data.room || `academy:${academyId}`;

      if (!room) {
        socket.emit('chat:error', { message: 'No perteneces a ninguna academia' });
        return;
      }

      console.log(`💬 ${username} envió mensaje a ${room}`);

      const messageData = {
        id: Date.now().toString(),
        userId,
        username,
        message: data.message,
        timestamp: new Date().toISOString(),
      };

      // Enviar a todos en la sala (incluyendo al emisor)
      chatNamespace.to(room).emit('chat:new-message', messageData);
    });

    socket.on('disconnect', () => {
      console.log(`❌ ${username} desconectado de /chat`);
    });
  });

  return chatNamespace;
};
