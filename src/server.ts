import Fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import { Server } from 'socket.io';
import path from 'path';
import { config } from './config/env.ts';
import { userRoutes } from './modules/user/user.routes.ts';
import { roomRoutes } from './modules/room/room.routes.ts';
import { messageRoutes } from './modules/message/message.routes.ts';
import { setupSocketHandlers } from './socket/socket.handler.ts';
import { fileURLToPath } from 'url'

const app = Fastify({ logger: true });

// Register static files
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

const start = async () => {
  try {
    await app.register(cors, { origin: '*' });

    await app.register(fastifyStatic, {
      root: path.join(__dirname, 'public'),
      prefix: '/',    // localhost:3000/
    })

    app.get('/', async (req, reply) => {
      return reply.sendFile('index.html')
    })

    // Setup Socket.io
    const io = new Server(app.server, {
      cors: { origin: '*' }
    });

    // Register routes
    await app.register(userRoutes, { prefix: '/api/users' });
    await app.register(roomRoutes, { prefix: '/api/rooms' });
    // await app.register(messageRoutes, { prefix: '/api/messages' });
    await app.register(messageRoutes, { prefix: '/api/messages', io: io });

    await app.listen({ port: Number(config.port), host: '0.0.0.0' });

    setupSocketHandlers(io);

    console.log(`Server running on port ${config.port}`);
    console.log(`Open http://localhost:${config.port} in your browser`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();