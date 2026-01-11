import { prisma } from '../../utils/prisma.ts';

export class RoomService {
  async createRoom(name: string) {
    return await prisma.room.create({ data: { name } });
  }

  async getAllRooms() {
    return await prisma.room.findMany();
  }

  async getRoomById(id: string) {
    return await prisma.room.findUnique({ where: { id } });
  }
}