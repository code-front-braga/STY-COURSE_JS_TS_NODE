import { Request, Response, RequestHandler } from 'express';

class UserController {
  public read: RequestHandler = (req: Request, res: Response): void => {
    res.json({ data: 'Hello World!' });
  };
}

export const userController = new UserController();
