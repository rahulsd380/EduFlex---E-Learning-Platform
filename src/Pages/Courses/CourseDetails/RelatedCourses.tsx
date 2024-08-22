import CourseCard, { TCourse } from "../CourseCard";
import { useGetAllCoursesQuery, useGetCoursesByCategoryQuery } from "../../../Redux/Features/Course/courseApi";
import CourseCardLoading from "../CourseCardLoading";
import rightArrow from "../../../assets/Icons/right-arrow3.svg";
import leftArrow from "../../../assets/Icons/left-arrow.svg";

import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useRef } from "react";


const RelatedCourses = ({category}) => {
    const {data, isLoading} = useGetCoursesByCategoryQuery(category);

    const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      import("swiper").then(({ Swiper }) => {
        Swiper.use([Navigation]);
      });
    }
  }, []);


  return (
    <div className="max-w-[1500px] w-[90%] mx-auto mt-16 font-Roboto">
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-neutral-55"><span className="text-primary-10">Related</span> Courses</h1>

      <div className="flex items-center gap-4">
        <button ref={prevRef} className="border border-primary-10 rounded-md hover:bg-dark-10/20 transition duration-300 p-2">
            <img src={leftArrow} alt="" className="size-4" />
        </button>

        <button ref={nextRef} className="bg-primary-10 border border-primary-10 rounded-md hover:bg-primary-15 transition duration-300 p-2">
            <img src={rightArrow} alt="" className="size-4" />
        </button>
      </div>
      </div>
      <hr className="border border-body-text/10 mt-3" />

      <div className="flex w-full mt-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== "boolean") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          className="carousel"
        >
          {data?.data.slice(0,6).map((course : TCourse, index : number) => (
            <SwiperSlide key={index}>
              <div className="mb-10 w-full">
                <CourseCard
                  details={course}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedCourses;
