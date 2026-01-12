import { FastifyRequest, FastifyReply } from 'fastify';
import { verifyToken } from '../utils/jwt.ts';

export const authMiddleware = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return reply.code(401).send({ error: 'Unauthorized' });
    }

    const decoded = verifyToken(token);
    (req as any).userId = decoded.userId;
  } catch (error) {
    return reply.code(401).send({ error: 'Invalid token' });
  }
};