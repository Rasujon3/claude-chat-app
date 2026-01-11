import { FastifyRequest, FastifyReply } from 'fastify';
import { MessageService } from './message.service.ts';

export class MessageController {
  private messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  async getMessagesByRoom(req: FastifyRequest<{ Params: { roomId: string } }>, reply: FastifyReply) {
    try {
        const { roomId } = req.params as { roomId: string };

      const messages = await this.messageService.getMessagesByRoom(roomId);
      return reply.code(200).send(messages);
    } catch (error: any) {
      return reply.code(500).send({ error: error.message });
    }
  }

  async createMessage(
    req: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const { content, roomId } = req.body as { content: string; roomId: string };
      const userId = (req as any).userId;

      const message = await this.messageService.createMessage(
        content,
        userId,
        roomId
      );
      return reply.code(201).send(message);
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }
}