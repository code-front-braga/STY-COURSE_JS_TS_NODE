// import { Request, Response } from 'express'

import express, { Request, Response } from 'express';

class UserController {
  public read(request: Request, response: Response) {
    return response.json({ data: 'Hello World!' });
  }
}

export const userController = new UserController();
