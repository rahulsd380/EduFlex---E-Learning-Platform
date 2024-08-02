import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';

const router = express.Router();


router.post('/signup', validateRequest(UserValidations.UserValidationSchema), UserControllers.createUser);
router.get('/', UserControllers.getAllUsers);

// router.post('/create-admin', UserControllers.createAdmin);

export const userRoutes = router;