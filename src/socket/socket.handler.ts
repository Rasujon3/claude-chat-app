import { Server } from 'socket.io';
import { MessageService } from '../modules/message/message.service.ts';
import { verifyToken } from '../utils/jwt.ts';
import { prisma } from '../utils/prisma.ts';

export const setupSocketHandlers = (io: Server) => {
  const messageService = new MessageService();

io.use((socket, next) => {
  const token =
    socket.handshake.auth.token || (socket.handshake.query.token as string)

  try {
    const decoded = verifyToken(token)

    ;(socket as any).userId = decoded.userId
    ;(socket as any).username = decoded.username

    next()
  } catch (error) {
    next(new Error('Authentication error'))
  }
})

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join-room', async (roomId: string) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);

      // Mark messages as DELIVERED
      const result = await prisma.message.updateMany({
        where: {
          roomId,
          status: 'SENT',
          userId: { not: (socket as any).userId }
        },
        data: { status: 'DELIVERED' }
      })

      console.log(`Updated ${result.count} messages to DELIVERED for room ${roomId}`);

      io.to(roomId).emit('message-status-update')
    });

    socket.on('send-message', async (data: { content: string; roomId: string ; status: string }) => {
      try {
        const message = await messageService.createMessage(
          data.content,
          (socket as any).userId,
          data.roomId,
          data.status = 'SENT'
        );

        io.to(data.roomId).emit('new-message', message);
      } catch (error) {
        socket.emit('error', { message: 'Failed to send message' });
      }
    });

    socket.on('typing', (roomId: string) => {
      socket.to(roomId).emit('user-typing', {
        userId: (socket as any).userId,
        username: (socket as any).username
      })
    })

    socket.on('stop-typing', (roomId: string) => {
      socket.to(roomId).emit('user-stop-typing', {
        userId: (socket as any).userId
      })
    })

    socket.on('seen-messages', async (roomId) => {
      const result = await messageService.messagesStatusUpdate(
          roomId,
          (socket as any).userId
        );

      console.log(`seen-messages Updated ${result.count} messages to DELIVERED for room ${roomId}`);

      io.to(roomId).emit('message-status-update')
    })


    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};