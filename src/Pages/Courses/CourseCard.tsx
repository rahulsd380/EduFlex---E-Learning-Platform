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

const CourseCard = (): JSX.Element => {
  const courses = [
    {
      id: 1,
      img: img1,
      category: "Design",
      title: "Figma UI UX Design..",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      review: "4.5",
      reviewCount: "15,820",
      price: "17.99",
      reviewerImg: avatar1,
      reviewerName: "Jane Cooper",
      totalEnrolled: "2001",
    },
    {
      id: 1,
      img: img1,
      category: "Design",
      title: "Figma UI UX Design..",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      review: "4.5",
      reviewCount: "15,820",
      price: "17.99",
      reviewerImg: avatar1,
      reviewerName: "Jane Cooper",
      totalEnrolled: "2001",
    },
    {
      id: 1,
      img: img2,
      category: "Development",
      title: "Figma UI UX Design..",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      review: "4.5",
      reviewCount: "15,820",
      price: "25.60",
      reviewerImg: avatar2,
      reviewerName: "Jane Cooper",
      totalEnrolled: "2001",
    },
    {
      id: 1,
      img: img3,
      category: "Marketing",
      title: "Figma UI UX Design..",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      review: "4.5",
      reviewCount: "15,820",
      price: "20",
      reviewerImg: avatar3,
      reviewerName: "Jane Cooper",
      totalEnrolled: "2001",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-10 mt-10">
        {courses.map((course) => (
          <Link to={"/"}
            key={course?.id}
            className="bg-white rounded-lg shadow p-6 flex flex-col gap-5 group"
          >
            <div className="relative">
              <img className="rounded-md h-[240px]" src={course?.img} alt="" />
              <div className="bg-white rounded backdrop-blur-lg px-[10px] py-1 flex items-center gap-2 absolute right-2 top-2 text-sm">
                <img src={clock} alt="" />
                08 hr 12 mins
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold text-primary-15 text-[14px] leading-5">
                {course?.category}
              </p>

              <Link to={""} className="flex justify-between items-center">
                <h1 className="capitalize font-bold text-2xl text-neutral-5">
                  {course?.title}
                </h1>
                <img className="w-6 group-hover:transform group-hover:-translate-y-0.5 transition duration-300" src={arrowUp} alt="" />
              </Link>

              <p className="font-normal text-body-text text-base leading-6">
                {course?.description}
              </p>

              <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[5px]">
                  <p className="font-semibold text-primary-20 text-[14px] leading-5">
                    {course?.review}
                  </p>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p className="font-normal text-body-text text-[14px]">
                  ({course?.reviewCount})
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={course?.reviewerImg} alt="" />
                <p>
                  <p className="font-semibold text-neutral-5 text-[14px]">
                    {course?.reviewerName}
                  </p>
                  <p className="font-normal text-neutral-5 text-[14px]">
                    {course?.totalEnrolled} Enrolled
                  </p>
                </p>
              </div>

              <h1 className="capitalize font-bold text-2xl text-primary-20">
                ${course?.price}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
