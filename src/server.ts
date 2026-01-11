import Fastify from 'fastify';
import cors from '@fastify/cors';
import { Server } from 'socket.io';
import { config } from './config/env.ts';
import { userRoutes } from './modules/user/user.routes.ts';
import { roomRoutes } from './modules/room/room.routes.ts';
import { messageRoutes } from './modules/message/message.routes.ts';
import { setupSocketHandlers } from './socket/socket.handler.ts';

const app = Fastify({ logger: true });

const start = async () => {
  try {
    await app.register(cors, { origin: '*' });
    
    // Register routes
    await app.register(userRoutes, { prefix: '/api/users' });
    await app.register(roomRoutes, { prefix: '/api/rooms' });
    await app.register(messageRoutes, { prefix: '/api/messages' });

    await app.listen({ port: Number(config.port), host: '0.0.0.0' });

    // Setup Socket.io
    const io = new Server(app.server, {
      cors: { origin: '*' }
    });

    setupSocketHandlers(io);

    console.log(`Server running on port ${config.port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();