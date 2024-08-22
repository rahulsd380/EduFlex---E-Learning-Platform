import { Router } from "express";
import { courseRoutes } from "../modules/courses/courses.routes";
import { userRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BlogRoutes } from "../modules/blogs/blog.routes";
import { FaqRoutes } from "../modules/faq/faq.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/courses",
    route: courseRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/faqs",
    route: FaqRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
