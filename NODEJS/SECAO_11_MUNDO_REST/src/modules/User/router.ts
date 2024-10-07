/**Router cria as rotas */
import { Router } from 'express';

import { userController } from './controller/user-controller';

const baseUrl = '/user';
const router: Router = Router();

router.get(`${baseUrl}/read`, userController.read);

export const userRouter = router;
