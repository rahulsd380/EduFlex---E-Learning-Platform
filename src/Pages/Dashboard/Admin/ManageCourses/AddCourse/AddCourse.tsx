import { useState } from "react";
import { useForm } from "react-hook-form";
import AddCourseTabs from "./AddCourseTabs";
import previous from "../../../../../assets/Icons/previous.svg"

import { useAddCourseMutation } from "../../../../../Redux/Features/Course/courseApi";
import { toast } from "sonner";
import BasicInformation from "./BasicInformation";
import InstructorDetails from "./InstructorDetails";
import CourseContent from "./CourseContent";
import ScheduleCertification from "./ScheduleCertification";
import CourseDescription from "./CourseDescription";

export type TInstructor = {
  instructorName: string;
  instructorImg: string;
  instructorExperience: string;
};

export type TCourse = {
  img: string;
  category: string;
  title: string;
  description: string;
  price: string;
  reviewerImg: string;
  reviewerName: string;
  totalEnrolled: string;
  courseDuration: string;
  instructor: TInstructor[];
  courseCurriculum: string[];
  tags: string[];
  language: string;
  prerequisites: string[];
  learningObjectives: string[];
  enrollmentDeadline: string;
  startDate: string;
  endDate: string;
  numberOfLessons: string;
  assignmentsAndAssessments: string;
  certification: string;
};

const AddCourse = () => {
  const [addCourse] = useAddCourseMutation();
  const [activeTab, setActiveTab] = useState(1);
  // All data from form
  const [formData, setFormData] = useState<TCourse>({
    img: "https://ibb.co/fGChjTJ",
    category: "",
    title: "",
    description: "",
    price: "",
    reviewerImg: "",
    reviewerName: "",
    totalEnrolled: "",
    courseDuration: "",
    instructor: [],
    courseCurriculum: [],
    tags: [],
    language: "",
    prerequisites: [],
    learningObjectives: [],
    enrollmentDeadline: "",
    startDate: "",
    endDate: "",
    numberOfLessons: "",
    assignmentsAndAssessments: "",
    certification: "",
  });

  console.log(formData);

  const [courseCurriculum, setCourseCurriculum] = useState<string[]>([]);
  const [prerequisites, setPrerequisites] = useState<string[]>([]);
  const [learningObjectives, setLearningObjectives] = useState<string[]>([]);
  const [instructorDetails, setInstructorDetails] = useState<TInstructor[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const [content, setContent] = useState<string>("");
  const [contentError, setContentError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCourse>();

  const onSubmit = async (data: TCourse) => {
    const newInstructor: TInstructor = {
      instructorName: "Rhul", // Replace with form input value
      instructorImg: "https://ibb.co/fGChjTJ", // Replace with form input value
      instructorExperience: "Hello", // Replace with form input value
    };

    setInstructorDetails((prevDetails) => [...prevDetails, newInstructor]);

    setFormData((prevState) => ({
      ...prevState,
      ...data,
      courseCurriculum,
      prerequisites,
      learningObjectives,
      instructor: instructorDetails,
      tags,
      description : content,
    }));

    // Extract courseData from formData
    const {
      img,
      category,
      title,
      price,
      reviewerImg,
      reviewerName,
      totalEnrolled,
      courseDuration,
      language,
      enrollmentDeadline,
      startDate,
      endDate,
      numberOfLessons,
      assignmentsAndAssessments,
      certification,
    } = formData || {};

    // Construct the courseData object
    const courseData = {
      img,
      category,
      title,
      description: content,
      price,
      reviewerImg,
      reviewerName,
      totalEnrolled,
      courseDuration,
      instructor: instructorDetails,
      courseCurriculum,
      tags : tags,
      language,
      prerequisites,
      learningObjectives,
      enrollmentDeadline,
      startDate,
      endDate,
      numberOfLessons,
      assignmentsAndAssessments,
      certification,
    };

    if (
      img &&
      content &&
      category &&
      title &&
      price &&
      courseDuration &&
      tags.length > 0 &&
      language &&
      enrollmentDeadline &&
      startDate &&
      endDate &&
      numberOfLessons &&
      assignmentsAndAssessments &&
      certification &&
      content !== "" &&
      instructorDetails.length > 0 &&
      tags.length > 0 &&
      courseCurriculum.length > 0 &&
      prerequisites.length > 0 &&
      learningObjectives.length > 0
    ) {
      try {
        const res = await addCourse(courseData).unwrap();
        console.log(res);
        toast.success("Course added successfully!");
      } catch (error) {
        toast.error(error.message || "An error occurred");
      }
    }

    // Handle tab navigation if needed
    if (activeTab < 5) {
      setActiveTab((prevTab) => prevTab + 1);
    }
  };

  const progressTab = 5;
  const progressPercentage = (activeTab / progressTab) * 100;

  return (
    <div className="font-Roboto">
      <h1 className="text-2xl text-body-text font-bold capitalize">
        Launch New Course
      </h1>
      <p className="text-body-text font-normal text-sm max-w-[700px] mt-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum
        molestiae illo aperiam cum quasi? Velit nisi nobis harum fugiat!
      </p>

      <div className="flex gap-10 mt-6">
        <AddCourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="bg-dark-5/40 p-4 rounded-lg w-full">
          {/* Progress */}
          <div className="mx-auto flex flex-col gap-2">
            <div className="flex h-4 w-full items-center justify-center overflow-hidden rounded-full bg-dark-10/40">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="transition-width mr-auto flex h-full w-0 items-center justify-center rounded-full  bg-primary-10 duration-500"
              >
                <span className="text-center text-xs font-medium text-dark-5">
                  {progressPercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 bg-white p-3 rounded-lg"
          >
            {activeTab === 1 && (
              <BasicInformation register={register} errors={errors} />
            )}

            {activeTab === 2 && (
              <InstructorDetails register={register} errors={errors} />
            )}


            {activeTab === 3 && (
              <CourseContent
                courseCurriculum={courseCurriculum}
                setCourseCurriculum={setCourseCurriculum}
                prerequisites={prerequisites}
                setPrerequisites={setPrerequisites}
                learningObjectives={learningObjectives}
                setLearningObjectives={setLearningObjectives}
              />
            )}

            {activeTab === 4 && (
              <ScheduleCertification register={register} errors={errors} />
            )}

            {activeTab === 5 && (
              <CourseDescription
                content={content}
                setContent={setContent}
                contentError={contentError}
                tags={tags}
                setTags={setTags}
              />
            )}

            <div className="flex justify-end mt-5">
            <div className="bg-primary-10 p-2 rounded-3xl flex items-center gap-3 w-fit">
            
            <div
           onClick={() => setActiveTab((prevTab) => Math.max(prevTab - 1, 1))}
                className="bg-dark-5 text-primary-10 font-medium size-8 rounded-full focus:outline-none p-2 flex items-center justify-center shadow-inner shadow-dark-5 cursor-pointer"
              >
                <img src={previous} alt="" className="sie-5" />
              </div>

              <button
                type="submit"
                className="bg-dark-5 text-primary-10 font-medium px-10 py-[6px] rounded-3xl focus:outline-none  shadow-inner shadow-dark-5"
              >
                {activeTab === 5 ? "Submit" : "Next"}
              </button>


            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
