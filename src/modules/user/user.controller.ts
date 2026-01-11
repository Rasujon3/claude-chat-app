import { FastifyRequest, FastifyReply } from 'fastify';
import { UserService } from './user.service.ts';
import { CreateUserInput, LoginInput } from './user.types.ts';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) {
    try {
      const result = await this.userService.register(req.body);
      return reply.code(201).send(result);
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async login(req: FastifyRequest<{ Body: LoginInput }>, reply: FastifyReply) {
    try {
      const result = await this.userService.login(req.body);
      return reply.code(200).send(result);
    } catch (error: any) {
      return reply.code(401).send({ error: error.message });
    }
  }
}