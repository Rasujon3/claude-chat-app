import { prisma } from '../../utils/prisma.ts';

export class MessageService {
  async createMessage(content: string, userId: string, roomId: string) {
    return await prisma.message.create({
      data: { content, userId, roomId },
      include: { user: { select: { id: true, username: true } } }
    });
  }

  async getMessagesByRoom(roomId: string) {
    return await prisma.message.findMany({
      where: { roomId },
      include: { user: { select: { id: true, username: true } } },
      orderBy: { createdAt: 'asc' }
    });
  }
}