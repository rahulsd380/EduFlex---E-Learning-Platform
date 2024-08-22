import express from 'express';
import { BlogControllers } from './blog.controller';

const router = express.Router();


router.post('/create-blog', BlogControllers.createBlog);
router.get('/', BlogControllers.getAllBlogs);
router.get('/:id', BlogControllers.getSingleBlogById);
router.get('/category/:category', BlogControllers.getBlogByCategory);
router.get('/:id', BlogControllers.getSingleBlogById);

// router.post('/create-admin', UserControllers.createAdmin);

export const BlogRoutes = router;