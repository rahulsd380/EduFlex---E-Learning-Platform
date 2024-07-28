import { Router } from "express";
import { courseRoutes } from "../modules/courses/courses.routes";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/course",
    route: courseRoutes,
  },
  {
    path: "/auth",
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
