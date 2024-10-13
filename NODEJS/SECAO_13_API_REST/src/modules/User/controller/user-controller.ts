import { Request, Response, RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

class UserController {
  public create: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const prisma = new PrismaClient();

    await prisma.user.create({
      data: {
        email: 'leo.braga06@hotmail.com',
        name: 'Leonardo Braga',
      },
    });

    res.json({ data: 'Criado com sucesso!' });
  };

  public read: RequestHandler = (req: Request, res: Response): void => {
    res.json({ data: 'Hello World!' });
  };
}

export const userController = new UserController();
