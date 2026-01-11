import { FastifyInstance } from 'fastify';
import { UserController } from './user.controller.ts';

export const userRoutes = async (fastify: FastifyInstance) => {
  const controller = new UserController();

  fastify.post('/register', controller.register.bind(controller));
  fastify.post('/login', controller.login.bind(controller));
};