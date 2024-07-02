import { TCourse } from "./course.interface";
import Course from "./courses.model";


const createCourse = async (payload: TCourse) => {

  const result = await Course.create(payload);
  return result;
};

export const CourseServices = {
    createCourse
};