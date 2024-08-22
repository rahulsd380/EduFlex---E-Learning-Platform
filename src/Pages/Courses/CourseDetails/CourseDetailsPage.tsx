import { useLoaderData } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import CourseDetailsHero from "./CourseDetailsHero";
import RelatedCourses from "./RelatedCourses";


const CourseDetailsPage = () => {
  const allCourses = useLoaderData();

  if (!allCourses) {
    return <div>Loading...</div>;
  }

  const {
    assignmentsAndAssessments,
    category,
    certification,
    courseCurriculum,
    courseDuration,
    description,
    endDate,
    enrollmentDeadline,
    img,
    instructor,
    language,
    learningObjectives,
    numberOfLessons,
    prerequisites,
    price,
    reviewerImg,
    reviewerName,
    reviews,
    startDate,
    tags,
    title,
    totalEnrolled,
    _id
  } = allCourses.data;


  return (
   <div>
    <CourseDetailsHero details={{ title, img, tags, description, price, courseDuration, language, certification, numberOfLessons }}/>

    <CourseDetails details={{ img, description, learningObjectives, courseCurriculum, prerequisites, reviews, enrollmentDeadline, startDate, endDate, price, instructor }}/>
    <RelatedCourses category={category}/>
   </div>
  );
};

export default CourseDetailsPage;
