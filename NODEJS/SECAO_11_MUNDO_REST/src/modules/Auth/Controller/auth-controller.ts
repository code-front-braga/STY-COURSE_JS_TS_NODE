import { Request, RequestHandler, Response } from 'express';

class AuthController {
  public authRead: RequestHandler = (request: Request, response: Response): void => {
    response.json({ data: 'Auth Controller' });
  };
}

export const authController = new AuthController();
