import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidations } from './auth.validation';
import { AuthControllers } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constants';

const router = express.Router();


router.post('/login', validateRequest(AuthValidations.loginValidationSchema), AuthControllers.loginUser);
router.post('/change-password', auth(USER_ROLE.admin, USER_ROLE.ceo, USER_ROLE.instructor, USER_ROLE.manager, USER_ROLE.student), validateRequest(AuthValidations.changePasswordValidationSchema), AuthControllers.changePassword);
router.post('/refresh-token', validateRequest(AuthValidations.refreshToeknValidationSchema), AuthControllers.refreshToekn);

export const AuthRoutes = router;