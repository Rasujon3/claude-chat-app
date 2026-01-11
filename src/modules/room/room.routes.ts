import { FastifyInstance } from 'fastify';
import { RoomController } from './room.controller.ts';
import { authMiddleware } from '../../middlewares/auth.middleware.ts';

export const roomRoutes = async (fastify: FastifyInstance) => {
  const controller = new RoomController();

  fastify.post('/', { preHandler: authMiddleware }, controller.createRoom.bind(controller));
  fastify.get('/', { preHandler: authMiddleware }, controller.getAllRooms.bind(controller));
  fastify.get('/:id', { preHandler: authMiddleware }, controller.getRoomById.bind(controller));
};