import { Server } from 'socket.io';
import { MessageService } from '../modules/message/message.service.ts';
import { verifyToken } from '../utils/jwt.ts';

export const setupSocketHandlers = (io: Server) => {
  const messageService = new MessageService();

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    try {
      const decoded = verifyToken(token);
      (socket as any).userId = decoded.userId;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join-room', (roomId: string) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);
    });

    socket.on('send-message', async (data: { content: string; roomId: string }) => {
      try {
        const message = await messageService.createMessage(
          data.content,
          (socket as any).userId,
          data.roomId
        );
        io.to(data.roomId).emit('new-message', message);
      } catch (error) {
        socket.emit('error', { message: 'Failed to send message' });
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};