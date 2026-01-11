import { FastifyRequest, FastifyReply } from 'fastify';
import { RoomService } from './room.service.ts';

export class RoomController {
  private roomService: RoomService;

  constructor() {
    this.roomService = new RoomService();
  }

  async createRoom(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { name } = req.body as { name: string };

      const room = await this.roomService.createRoom(name);
      return reply.code(201).send(room);
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async getAllRooms(req: FastifyRequest, reply: FastifyReply) {
    try {
      const rooms = await this.roomService.getAllRooms();
      return reply.code(200).send(rooms);
    } catch (error: any) {
      return reply.code(500).send({ error: error.message });
    }
  }

  async getRoomById(req: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = req.params as { id: string };

      const room = await this.roomService.getRoomById(id);
      if (!room) {
        return reply.code(404).send({ error: 'Room not found' });
      }
      return reply.code(200).send(room);
    } catch (error: any) {
      return reply.code(500).send({ error: error.message });
    }
  }
}