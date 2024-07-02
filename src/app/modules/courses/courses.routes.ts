import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './courses.controller';

const router = express.Router();

router.post('/create-course', CourseControllers.createCourse);

export const courseRoutes = router;