import img1 from "../../assets/Images/Blog/1.png";
import img2 from "../../assets/Images/Blog/2.png";
import img3 from "../../assets/Images/Blog/3.png";
// import img4 from "../../assets/Images/Blog/4.png";
import arrowUp from "../../assets/Icons/arrow-up-right.svg";
import star from "../../assets/Icons/Star 1.svg";
import avatar1 from "../../assets/Images/Avatar.png";
import avatar2 from "../../assets/Images/Avatar (1).png";
import avatar3 from "../../assets/Images/Avatar2.png";
import clock from "../../assets/Icons/clock.svg";
import { Link } from "react-router-dom";
import CourseCardLoading from "./CourseCardLoading";

export type TInstructor= {
  instructorName: string;
  instructorImg: string;
  instructorExperience: string;
}

export type TReview= {
  reviewerName: string;
  reviewerImg: string;
  review: string;
  reviewDate: string;
}

export type TCourse= {
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
  enrollmentDeadline: string; // Use ISO format date string
  startDate: string; // Use ISO format date string
  endDate: string; // Use ISO format date string
  numberOfLessons: number;
  assignmentsAndAssessments: string;
  certification: string;
  reviews: TReview[];
}

const CourseCard : React.FC<{details : TCourse}> = ({details, isLoading}) => {
  console.log(details);

  const {_id, img, category, title, courseDuration, description, reviews, price, instructor, totalEnrolled} = details;
  console.log(reviews);

  const validReviews = reviews.filter(review => !isNaN(parseFloat(review.review)));
  const averageRating = validReviews.length > 0
    ? validReviews.reduce((acc, review) => acc + parseFloat(review.review), 0) / validReviews.length
    : 0;

  // Create an array for the star ratings
  const starRatings = [...Array(5)].map((_, index) => {
    const rating = index + 1;
    return {
      rating,
      count: validReviews.filter(review => parseFloat(review.review) === rating).length
    };
  });
  return (
    <div>
         
          <Link to={"/"}
          className="bg-white hover:shadow-lg rounded-lg shadow p-6 flex flex-col gap-5 group"
        >
          <div className="relative">
            <img className="rounded-md h-[240px]" src={img} alt="" />
            <div className="bg-white rounded backdrop-blur-lg px-[10px] py-1 flex items-center gap-2 absolute right-2 top-2 text-sm">
              <img src={clock} alt="" />
              {courseDuration}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-primary-15 text-[14px] leading-5">
              {category}
            </p>

            <Link to={""} className="flex justify-between items-center">
              <h1 className="capitalize font-bold text-xl text-neutral-60">
                {title}
              </h1>
              <img className="w-6 group-hover:transform group-hover:-translate-y-0.5 transition duration-300" src={arrowUp} alt="" />
            </Link>

            <p className="font-normal text-body-text text-base leading-6">
              {description}
            </p>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-[5px]">
                <p className="font-semibold text-primary-20 text-[14px] leading-5">
                {averageRating.toFixed(1)}
                </p>
                {[...Array(5)].map((_, index) => (
            <img key={index} src={star} alt={`star-${index}`} className={`w-4 ${averageRating > index ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
              </div>
              <p className="font-normal text-body-text text-[14px]">
                ({reviews.length})
              </p>
            </div>

          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={instructor[1]?.instructorImg} alt="" />
              <p>
                <p className="font-semibold text-neutral-60 text-[14px]">
                  {instructor[2]?.instructorName}
                </p>
                <p className="font-normal text-neutral-60 text-[14px]">
                  {totalEnrolled} Enrolled
                </p>
              </p>
            </div>

            <h1 className="capitalize font-bold text-2xl text-primary-20">
              ${price}
            </h1>
          </div>
        </Link>
         
        
    </div>
  );
};

export default CourseCard;
