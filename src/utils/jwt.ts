import jwt from 'jsonwebtoken';

export const generateToken = (user: { id: string; username: string }) => {
  return jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )
}


export const verifyToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};