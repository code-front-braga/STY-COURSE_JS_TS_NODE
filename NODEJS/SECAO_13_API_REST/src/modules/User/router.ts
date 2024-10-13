/**Router cria as rotas */
import { Router } from 'express';
import { userController } from './controller/user-controller';

export const baseUrl = '/user';
const router: Router = Router();

router.post(`${baseUrl}/create`, userController.create);
router.get(`${baseUrl}/read`, userController.read);

export const userRouter = router;
