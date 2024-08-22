
export type TInstructor = {
  instructorName: string;
  instructorImg: string;
  instructorExperience: string;
};

export type TReview = {
  reviewerName: string;
  reviewerImg: string;
  review: string;
  reviewDate: string;
};

export type TCourse = {
  img: string;
  category: string;
  title: string;
  description: string;
  price: string;
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
  reviews: TReview[];
};
