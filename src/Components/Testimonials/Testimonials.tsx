import rightArrow from "../../assets/Icons/right-arrow3.svg";
import leftArrow from "../../assets/Icons/left-arrow.svg";
import Heading from "../Heading";
import TestimonialCard from "./TestimonialCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      // Ensure navigation is set after swiper is initialized and refs are available
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-[#F0FDF4] to-[#dff8ed] py-16 mt-20">
      <div className="max-w-[1500px] w-[90%] mx-auto font-Roboto">
        <Heading
          subTitle=""
          heaing="What are the heros saying?"
          description="Our support team is here to help. Reach out via email, phone, or live
          chat for any inquiries. We’re committed to providing timely
          assistance."
        />

        <div className="flex flex-col md:flex-row items-center">
          {/* Carousel */}
          <div className="w-full max-w-[1080px] mx-auto mt-16 flex flex-col md:flex-row items-center justify-between">
            {/* Previous button */}
            <button
              ref={prevRef}
              className="size-10 rounded-full border border-primary-10 hidden md:flex items-center justify-center z-50"
            >
              <img src={leftArrow} alt="" className="size-7" />
            </button>

            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1280: {
                  slidesPerView: 1,
                },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              spaceBetween={0}
              modules={[Pagination, Navigation]}
              className="carousel w-full max-w-[1000px] mx-auto"
            >
              {[1, 2, 3, 4].map((item) => (
                <SwiperSlide key={item}>
                  <TestimonialCard />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Next button */}
            <button
              ref={nextRef}
              className="size-10 rounded-full bg-primary-10 hidden md:flex items-center justify-center"
            >
              <img src={rightArrow} alt="" className="size-7" />
            </button>


              {/* For small device */}
            <div className="flex md:hidden items-center gap-5 mt-10">
              {/* Previous button */}
              <button
                ref={prevRef}
                className="size-10 rounded-full border border-primary-10 flex items-center justify-center z-50"
              >
                <img src={leftArrow} alt="" className="size-7" />
              </button>

              {/* Next button */}
              <button
                ref={nextRef}
                className="size-10 rounded-full bg-primary-10 flex items-center justify-center"
              >
                <img src={rightArrow} alt="" className="size-7" />
              </button>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
