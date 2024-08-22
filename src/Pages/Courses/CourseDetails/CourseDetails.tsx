import shape from "../../../assets/Icons/shape.svg";
import prerequisiteIcon from "../../../assets/Icons/Prerequisites.svg";
import learningObjectiveIcon from "../../../assets/Icons/learning-objectives.svg";
import profileImg from "../../../assets/Images/profileImg.jpeg";
import star from "../../../assets/Icons/Star 1.svg";
import avatar1 from "../../../assets/Images/Avatar.png";
import like from "../../../assets/Icons/like.svg";
import dislike from "../../../assets/Icons/dislike.svg";

import duration from "../../../assets/Icons/duration.svg";
import lastDate from "../../../assets/Icons/last-date.svg";


import message from "../../../assets/Icons/message.svg";
import beginCourse from "../../../assets/Icons/begin-course.svg";
import deadline from "../../../assets/Icons/enrollment-deadline.svg";

const CourseDetails = ({details}) => {

   const { img, description, learningObjectives, courseCurriculum, prerequisites, reviews, enrollmentDeadline, startDate, endDate, price, instructor } = details

   console.log(reviews);


    const review = [
        {
          reviewerName: "Alice Johnson",
          reviewerImg: avatar1,
          reviewDate: "2024-08-01",
          review: "Great product! Highly recommend it."
        },
        {
          reviewerName: "Bob Smith",
          reviewerImg: avatar1,
          reviewDate: "2024-07-28",
          review: "Not what I expected. The quality could be better."
        },
        {
          reviewerName: "Charlie Brown",
          reviewerImg: avatar1,
          reviewDate: "2024-07-15",
          review: "Excellent service and fast delivery."
        }
      ];

      const courseOverviews = [
        {
          icon: duration,
          title: "Srart Date",
          value: startDate
        },
        {
          icon: lastDate,
          title: "End Date",
          value: endDate
        },
        
      ];
    return (
        <div className='max-w-[1500px] w-[90%] mx-auto mt-10 font-Roboto'>
            <div className='flex flex-col lg:flex-row gap-6'>

                {/* Left Side Content */}
                <div className='w-full lg:w-[70%] flex flex-col gap-6 bg-white shadow-lg rounded-lg p-4'>
                    {/* About course */}
                    <div className="space-y-3">
                    <h1 className="text-xl font-bold text-neutral-55">About Course</h1>
                    <hr className="border border-body-text/10"/>

                    <p className='text-body-text'>{description}</p>
                    </div>

                    {/* Learning Objectives */}
                    <div className="space-y-3">
                    <h1 className="text-xl font-bold text-neutral-55">Intended Learning Objectives</h1>

                    <hr className="border border-body-text/10"/>

                    <p className='text-neutral-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic. Numquam perferendis, nam quam neque minima dignissimos vitae aliquid perspiciatis temporibus nemo.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {
                            learningObjectives?.map((objective, index) => 
                                <div className="flex items-center gap-2">
                            <img src={learningObjectiveIcon} alt="" className="size-6" />
                            <p className='text-body-text'>{objective}</p>
                        </div>
                            )
                        }
                    </div>

                    </div>

                    {/* Curriculum */}
                    <div className="space-y-3">
                    <h1 className="text-xl font-bold text-neutral-55">Course Curriculum</h1>
                    <hr className="border border-body-text/10"/>

                    <div className="flex flex-col gap-4">
                    {
                            courseCurriculum?.map((curriculum, index) => 
                                <div key={index} className="flex items-center gap-2">
                        <img src={shape} alt="" className="size-5" />
                        <p className='text-body-text'>{curriculum}</p>
                    </div>
                            )
                        }
                    </div>

                    </div>

                    {/* Prerequisites*/}
                    <div className="space-y-3">
                    <h1 className="text-xl font-bold text-neutral-55">Prerequisites</h1>

                    <hr className="border border-body-text/10"/>

                    <div className="flex flex-col gap-4">
                    {
                            prerequisites?.map((prerequisite, index) => 
                                <div key={index} className="flex items-center gap-2">
                        <img src={prerequisiteIcon} alt="" className="size-5" />
                        <p className='text-body-text'>{prerequisite}</p>
                    </div>
                            )
                        }
                    </div>

                    </div>

                    {/* Review */}
                    <div className="bg-[#F7F7F9] rounded-lg p-4">
                    <h1 className="text-xl font-bold text-neutral-55">Reviews</h1>

                        <hr className="border border-body-text/10 mt-3"/>

                        <div className="flex flex-col md:flex-row gap-10 w-full mt-6">

                            {/* Left average rating */}
                            <div className="bg-white p-3 rounded-lg shadow flex flex-col gap-4 items-center justify-center w-[200px]">
                            <h1 className="text-5xl font-bold text-neutral-55">5.00</h1>
                            <div className="flex items-center gap-[5px]">
                {[...Array(5)].map((_, index) => (
            <img key={index} src={star} alt={`star-${index}`} className={`w-4`} />
          ))}
              </div>
          <p className="text-body-text font-semibold">Course Rating</p>
                            </div>

                            <div className="w-full flex flex-col gap-2">

                                {/* Review Status Rating */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1">
                                    <img src={star} alt="" className="size-4" />
                                    <p className="text-body-text font-semibold">5</p>
                                    </div>

                                    {/* Progress */}
                                    <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                                        <div className="bg-primary-10 rounded-[100px] w-[100%] h-2"></div>
                                    </div>
                                    <p className="text-body-text text-sm">89</p>
                                </div>

                                {/* Review Status Rating */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1">
                                    <img src={star} alt="" className="size-4" />
                                    <p className="text-body-text font-semibold">4</p>
                                    </div>

                                    {/* Progress */}
                                    <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                                        <div className="bg-[#FFB4AA] rounded-[100px] w-[80%] h-2"></div>
                                    </div>
                                    <p className="text-body-text text-sm">60</p>
                                </div>

                                {/* Review Status Rating */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1">
                                    <img src={star} alt="" className="size-4" />
                                    <p className="text-body-text font-semibold">3</p>
                                    </div>

                                    {/* Progress */}
                                    <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                                        <div className="bg-[#FFD700] rounded-[100px] w-[60%] h-2"></div>
                                    </div>
                                    <p className="text-body-text text-sm">38</p>
                                </div>

                                {/* Review Status Rating */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1">
                                    <img src={star} alt="" className="size-4" />
                                    <p className="text-body-text font-semibold">2</p>
                                    </div>

                                    {/* Progress */}
                                    <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                                        <div className="bg-[#8d28e0] rounded-[100px] w-[30%] h-2"></div>
                                    </div>
                                    <p className="text-body-text text-sm">10</p>
                                </div>

                                {/* Review Status Rating */}
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1">
                                    <img src={star} alt="" className="size-4" />
                                    <p className="text-body-text font-semibold">1</p>
                                    </div>

                                    {/* Progress */}
                                    <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                                        <div className="bg-warning-10 rounded-[100px] w-[5%] h-2"></div>
                                    </div>
                                    <p className="text-body-text text-sm">0</p>
                                </div>

                            </div>
                        </div>
                    </div>




                    <div>
                    <h1 className="text-xl font-bold text-neutral-55">Student Reviews</h1>
                    <hr className="border border-body-text/10 mt-3"/>

                    {/* Review Card */}
                    {
                        review.map((review, index) => 
                            <div key={index} className="border-b border-dark-10/50 pb-5 flex flex-col gap-3 mt-6">
                        <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                                 <img src={review.reviewerImg} alt="" />
                                 <p>
                                   <p className="font-semibold text-neutral-60 text-[15px]">
                                     {review.reviewerName}
                                   </p>
                                   <p className="font-normal text-neutral-60 text-[11px]">
                                     {review.reviewDate}
                                   </p>
                                 </p>
                               </div>
                 
                               <div className="flex items-center gap-2">
                               {
                   Array.from({ length: 5 }).map((_, index) => (
                     <img key={index} src={star} alt="" className="size-4" />
                   ))
                 }
                               </div>
                        </div>
                               <p className="text-body-text font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias, tempore sequi assumenda reprehenderit placeat necessitatibus asperiores. Obcaecati soluta provident deserunt odit quis similique unde non expedita placeat distinctio, voluptatem totam minus quasi omnis pariatur in consequuntur, vitae molestias quisquam!</p>
                 
                               <div className="border border-dark-10/40  w-fit rounded-lg px-3 py-2">
                                         <div className="flex gap-3 items-center">
                                         <div className="flex items-center gap-1">
                                     <img src={like} alt="" className="size-5"/>
                                     <p className="text-sm text-gray-500">100</p>
                                 </div>
                 
                                 <div className="h-[20px] w-0.5 bg-gray-300">
                 
                                 </div>
                 
                                 <div className="flex items-center gap-1">
                                     <p className="text-sm text-gray-500">55</p>
                                     <img src={dislike} alt="" className="size-5"/>
                                 </div>
                                         </div>
                           </div>
                                     </div>
                        )
                    }

                    

                    


                    </div>
                </div>

                {/* Right Side Content */}
                <div className='w-full lg:w-[40%] xl:w-[30%] bg-[#F7F7F9] rounded-lg p-4'>

                    {/* Right side */}
          <div className="bg-white shadow rounded-lg p-4">
            <img src={img} alt="" className="rounded-lg" />

            <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
                  <img src={deadline} alt="" className="size-6" />
                  <p className="text-neutral-60 font-medium text-lg">Deadline</p>
                </div>
                <p className="text-warning-10">{enrollmentDeadline}</p>
            </div>

            {courseOverviews.map((overview, index) => (
              <div key={index} className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <img src={overview.icon} alt="" className="size-5" />
                  <p className="text-neutral-60 font-medium">{overview.title}</p>
                </div>
                <p className="text-body-text">{overview.value}</p>
              </div>
            ))}
            <button className="px-3 py-2 bg-primary-15 hover:bg-primary-10 transition duration-300 text-white w-full rounded-lg mt-5 flex justify-center items-center gap-2">
                <img src={message} alt="" className="size-5" />
              Send Message
            </button>

            <button className="px-3 py-2 border border-neutral-55/30 hover:bg-dark-10/20 transition duration-300 text-neutral-60 font-medium w-full rounded-lg mt-3 flex justify-center items-center gap-2 focus:outline-none">
            <img src={beginCourse} alt="" className="size-5" />
            Enroll Now for (${price})
            </button>
          </div>


                <div>
                <h1 className="text-xl font-bold text-neutral-55 mt-6">Instructors</h1>

                <hr className="border border-body-text/10 mt-3"/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">

                    {
                        instructor?.map((instructoeData, index) => 
                            <div className="bg-white shadow rounded-lg flex gap-5 p-4 mt-4">
                        <div className="bg-[#F7F7F9] w-20 h-24 rounded-lg">
                            <img src={instructoeData.instructorImg} alt="" className="w-20 h-24 rounded-lg" />
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold text-neutral-55">{instructoeData.instructorName}</h1>
                            {/* <p className="text-body-text text-sm mt-1">JavaScript Developer</p> */}
                            <p className="text-body-text text-sm mt-1">{instructoeData.instructorExperience}</p>
                            <p className="text-primary-10 font-semibold mt-3 hover:underline cursor-pointer">Profile</p>
                        </div>
                    </div>
                        )
                    }
                    </div>
                    </div>

                    <div>
                    <h1 className="text-xl font-bold text-neutral-55 mt-6">Latest Courses</h1>

                    <hr className="border border-body-text/10 mt-3"/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CourseDetails;