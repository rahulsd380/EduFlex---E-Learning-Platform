import duration from "../../../assets/Icons/duration.svg";
import languageIcon from "../../../assets/Icons/language.svg";
import certificate from "../../../assets/Icons/certificate.svg";
import lesson from "../../../assets/Icons/lesson.svg";
import gift from "../../../assets/Icons/gift.svg";
import bg from "../../../assets/Images/line-bg.png";
import rightArrow from "../../../assets/Icons/rightArrow2.svg";
import star from "../../../assets/Icons/Star 1.svg";
import play from "../../../assets/Icons/play.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal1 from "../../../Components/Modals/Modal1";

import bkash from "../../../assets/Images/bkash-logo.png";
import nagad from "../../../assets/Images/nagad-logo.png";
import mastercard from "../../../assets/Images/mastercard-logo.png";
import cross from "../../../assets/Icons/cross.svg";

type CourseDetailsHeroProps = {
  title: string;
  img: string;
  tags: string[];
  description: string;
  price: string;
  courseDuration: string;
  language: string;
  certification: string;
  numberOfLessons: string;
};

const CourseDetailsHero = ({
  details,
}: {
  details: CourseDetailsHeroProps;
}) => {
  const [openModal1, setOpenModal1] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<
    "Bkash" | "Nagad" | "Mastercard"
  >("Bkash");
  const {
    title,
    img,
    tags,
    description,
    price,
    courseDuration,
    language,
    certification,
    numberOfLessons,
  } = details;

  const courseOverviews = [
    {
      icon: duration,
      title: "Course Duration",
      value: courseDuration,
    },
    {
      icon: languageIcon,
      title: "Language",
      value: language,
    },
    {
      icon: certificate,
      title: "Certificate",
      value: certification,
    },
    {
      icon: lesson,
      title: "Lessons",
      value: `${numberOfLessons} Lessons`,
    },
    {
      icon: gift,
      title: "Gift",
      value: "Gift included",
    },
  ];

  return (
    <div className="font-Roboto relative">
      <div className="relative bg-gradient-to-tl from-[#15803D] via-[#0F766E] to-[#164E63] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 hidden lg:block"
          style={{ backgroundImage: `url(${bg})` }}
        />

        <div className="relative max-w-[1500px] w-[90%] mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side */}
            <div className="w-full lg:w-[70%] flex flex-col gap-4">
              <div className="flex items-center gap-1 text-dark-5/60">
                <Link
                  to={"/"}
                  className=" text-sm hover:underline"
                >
                  Home
                </Link>
                <img src={rightArrow} alt="" className="size-5" />
                <Link
                  to={"/courses"}
                  className=" text-sm hover:underline"
                >
                  Courses
                </Link>
                <img src={rightArrow} alt="" className="size-5" />
                <p className=" text-sm">{title}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-7">
                {tags?.map((tag: string, index: number) => (
                  <div
                    key={index}
                    className="p-2 bg-primary-10/20 text-dark-5/60 rounded  text-sm w-fit"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <h1 className="text-xl md:text-6xl leading-none md:leading-[65px] font-bold ">
                {title}
              </h1>

              <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[5px]">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt={`star-${index}`}
                      className={`w-4`}
                    />
                  ))}
                </div>
                <p className="font-normal text-[14px]">(3598)</p>
              </div>

              <p className="font-normal text-dark-5/60 font-Roboto">{description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint beatae corporis impedit voluptatibus vero, harum culpa mollitia alias optio deserunt assumenda officia nulla nobis qui error cum ullam, dignissimos excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti velit illum quisquam quas laboriosam perspiciatis possimus dignissimos est distinctio omnis.</p>

              <div className="flex items-center gap-6 max-w-[400px] mt-3">
                <button
                  onClick={() => setOpenModal1(true)}
                  className="p-3 bg-primary-10 text-white w-full rounded-lg"
                >
                  Enroll Now for ${price}
                </button>

                <button className="flex items-center gap-2 w-full">
                  <img src={play} alt="" className="size-5" />
                  How to enroll?
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full lg:w-[40%] xl:w-[30%] bg-primary-10/70 shadow-lg rounded-lg p-4">
              <img src={img} alt="" className="rounded-lg" />

              {courseOverviews.map((overview, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mt-3"
                >
                  <div className="flex items-center gap-2">
                    <img src={overview.icon} alt="" className="size-5" />
                    <p className="text-dark-5/100 font-medium">
                      {overview.title}
                    </p>
                  </div>
                  <p className="text-dark-5/80">{overview.value}</p>
                </div>
              ))}
              <button
                onClick={() => setOpenModal1(true)}
                className="px-3 py-2 bg-neutral-60/30 hover:bg-primary-15 text-white w-full rounded-lg mt-5"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames={"w-[400px] p-4"}
      >
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-lg font-medium text-neutral-60">
            Select Payment Method
          </h1>

          <img
            onClick={() => setOpenModal1(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div
            onClick={() => setSelectedMethod("Bkash")}
            className={`flex items-center justify-between gap-4 bg-white border ${
              selectedMethod === "Bkash"
                ? "border-primary-10"
                : "border-neutral-55/40"
            } rounded-md p-2 cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              <img src={bkash} alt="BKash" className="size-10" />
              <div>
                <h1 className="text-neutral-60 font-medium">BKash</h1>
                <p className=" text-xs">Pay via BKash</p>
              </div>
            </div>
            <div className="size-5 border border-neutral-55/40 rounded-full flex items-center justify-center">
              <div
                className={`${
                  selectedMethod === "Bkash" ? "bg-primary-10" : "bg-white"
                } w-3 h-3 rounded-full`}
              ></div>
            </div>
          </div>

          <div
            onClick={() => setSelectedMethod("Nagad")}
            className={`flex items-center justify-between gap-4 bg-white border ${
              selectedMethod === "Nagad"
                ? "border-primary-10"
                : "border-neutral-55/40"
            } rounded-md p-2 cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              <img src={nagad} alt="BKash" className="size-10" />
              <div>
                <h1 className="text-neutral-60 font-medium">Nagad</h1>
                <p className=" text-xs">Pay via Nagad</p>
              </div>
            </div>
            <div className="size-5 border border-neutral-55/40 rounded-full flex items-center justify-center">
              <div
                className={`${
                  selectedMethod === "Nagad" ? "bg-primary-10" : "bg-white"
                } w-3 h-3 rounded-full`}
              ></div>
            </div>
          </div>

          <div
            onClick={() => setSelectedMethod("Mastercard")}
            className={`flex items-center justify-between gap-4 bg-white border ${
              selectedMethod === "Mastercard"
                ? "border-primary-10"
                : "border-neutral-55/40"
            } rounded-md p-2 cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              <img src={mastercard} alt="BKash" className="size-10" />
              <div>
                <h1 className="text-neutral-60 font-medium">Mastercard</h1>
                <p className=" text-xs">Pay via Mastercard</p>
              </div>
            </div>
            <div className="size-5 border border-neutral-55/40 rounded-full flex items-center justify-center">
              <div
                className={`${
                  selectedMethod === "Mastercard" ? "bg-primary-10" : "bg-white"
                } w-3 h-3 rounded-full`}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end mt-5">
          <button className="border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded bg-primary-10 text-white shadow-xl w-[150px]">
            Next
          </button>
        </div>
      </Modal1>
    </div>
  );
};

export default CourseDetailsHero;
