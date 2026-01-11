import { FastifyInstance } from 'fastify';
import { MessageController } from './message.controller.ts';
import { authMiddleware } from '../../middlewares/auth.middleware.ts';

export const messageRoutes = async (fastify: FastifyInstance) => {
  const controller = new MessageController();

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
