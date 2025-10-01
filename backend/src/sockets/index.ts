import { Server } from 'socket.io';
import { setupGameNamespace } from './gameSocket';
import { setupAcademyNamespace } from './academySocket';
import { setupChatNamespace } from './chatSocket';

export const initializeNamespaces = (io: Server) => {
  console.log('🔌 Inicializando namespaces de Socket.io...');

  setupGameNamespace(io);
  setupAcademyNamespace(io);
  setupChatNamespace(io);

  console.log('✅ Namespaces inicializados: /game, /academy, /chat');
};
