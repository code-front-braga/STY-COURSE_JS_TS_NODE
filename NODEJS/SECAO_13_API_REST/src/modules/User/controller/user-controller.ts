import { Request, RequestHandler, Response } from 'express';
import { z } from 'zod';

class UserController {
  public create: RequestHandler = (req: Request, res: Response): void => {
    const { name, email, password } = req.body;

    try {
      const ZUserSchema = z.object({
        name: z.string(),
        email: z.string().email({ message: 'Email é obrigatório.' }),
        password: z.string().min(8, { message: 'Senha é obrigatória.' }),
      });
      ZUserSchema.parse({ name, email, password });
    } catch (err: any) {
      res.status(400).json({
        message: "Dados Inválidos.",
        error: err.errors,
      });
    }
  }
}

export const userController = new UserController();
