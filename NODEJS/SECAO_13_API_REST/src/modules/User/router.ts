/**Router cria as rotas */
import { Router } from 'express';
import { userController } from './controller/user-controller';

const router: Router = Router();
export const baseUrl = '/user';

router.post(`${baseUrl}`, userController.create);

export const userRouter = router;
