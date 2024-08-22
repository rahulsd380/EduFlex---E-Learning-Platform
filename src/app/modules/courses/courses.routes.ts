import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './courses.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constants';
import validateRequest from './../../middlewares/validateRequest';
import { CourseValidations } from './courses.validation';

const router = express.Router();

router.post('/create-course', auth(USER_ROLE.admin, USER_ROLE.manager, USER_ROLE.instructor), validateRequest(CourseValidations.CourseValidationSchema),CourseControllers.createCourse);

router.post('/create-temporary-course', CourseControllers.createTemporaryCourse);
router.get('/get-temporary-course', CourseControllers.getAllTemporaryCourse);


router.get('/', CourseControllers.getAllCourses);
router.get('/:courseId', CourseControllers.getSingleCourseById);
router.get('/category/:category', CourseControllers.getCoursesByCategory);
export const courseRoutes = router;