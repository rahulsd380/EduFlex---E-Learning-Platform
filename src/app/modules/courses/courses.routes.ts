import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './courses.controller';

const router = express.Router();

router.post('/create-course', CourseControllers.createCourse);
router.get('/', CourseControllers.getAllCourses);
router.get('/:courseId', CourseControllers.getSingleCourseById);
export const courseRoutes = router;