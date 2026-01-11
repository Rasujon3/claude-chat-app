import bcrypt from 'bcryptjs';
import { prisma } from '../../utils/prisma.ts';
import { generateToken } from '../../utils/jwt.ts';
import { CreateUserInput, LoginInput } from './user.types.ts';

export class UserService {
  async register(data: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword
      }
    });

    const token = generateToken(user.id);
    return { user: { id: user.id, username: user.username, email: user.email }, token };
  }

  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken(user.id);
    return { user: { id: user.id, username: user.username, email: user.email }, token };
  }
}