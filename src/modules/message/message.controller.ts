import { FastifyRequest, FastifyReply } from 'fastify';
import { MessageService } from './message.service.ts';
import { Server } from 'socket.io'

export class MessageController {
  private messageService: MessageService;
  private io: Server

  constructor(io: Server) {
    this.messageService = new MessageService();
    this.io = io;
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
      const { content, roomId } = req.body as { content: string; roomId: string; status: string };
      const userId = (req as any).userId;

      const message = await this.messageService.createMessage(
        content,
        userId,
        roomId,
        status
      );
      
      if (this.io) {
        this.io.to(roomId).emit('new-message', message);
      }

      return reply.code(201).send(message);
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }
}