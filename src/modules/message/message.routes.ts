import { FastifyInstance } from 'fastify';
import { MessageController } from './message.controller.ts';
import { authMiddleware } from '../../middlewares/auth.middleware.ts';

export const messageRoutes = async (fastify: FastifyInstance, opts: any) => {
  const controller = new MessageController(opts.io);

  fastify.get<{
    Params: { roomId: string }
  }>(
    '/room/:roomId',
    { preHandler: authMiddleware },
    controller.getMessagesByRoom.bind(controller)
  );

  fastify.post<{
    Body: { content: string; roomId: string }
  }>(
    '/',
    { preHandler: authMiddleware },
    controller.createMessage.bind(controller)
  );
};
