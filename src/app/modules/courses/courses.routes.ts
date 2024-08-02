import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './courses.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constants';

const router = express.Router();

router.post('/create-course', auth(USER_ROLE.admin, USER_ROLE.manager), CourseControllers.createCourse);
router.get('/', CourseControllers.getAllCourses);
router.get('/:courseId', CourseControllers.getSingleCourseById);
export const courseRoutes = router;