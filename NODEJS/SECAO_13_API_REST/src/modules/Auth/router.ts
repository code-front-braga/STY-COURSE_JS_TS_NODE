import { Router } from 'express';
import { authController } from './Controller/auth-controller';
import { baseUrl } from 'modules/User/router';

const router: Router = Router();

router.get(`${baseUrl}/auth`, authController.authRead);

export const authRouter = router;
