import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();


// validateRequest(StudentValidations.StudentZodSchema)
router.post('/signup', UserControllers.createUser);

// router.post('/create-admin', UserControllers.createAdmin);

export const userRoutes = router;