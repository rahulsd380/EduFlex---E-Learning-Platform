import React from 'react';
import star from "../../../../assets/Icons/Star 1.svg";
import deadline from "../../../../assets/Icons/deadline.svg";
import enrolled from "../../../../assets/Icons/enrolled.svg";

interface ManageCourseCardProps {
  course: {
    image: string;
  category: string;
  title: string;
  rating: number;
  description: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  enrolledCount: number;
  daysLeft: number;
  price: number;
  }
}

const ManageCourseCard: React.FC<ManageCourseCardProps> = ({
  course
}) => {
    const {image,
        category,
        title,
        rating,
        description,
        instructorName,
        instructorTitle,
        instructorAvatar,
        enrolledCount,
        daysLeft,
        price} = course;

        let categoryBg = "Development";
        if(category === "Development"){
            categoryBg = "#1E90FF"
        }else if(category === "Design"){
            categoryBg = "#FF69B4"
        } 
        else if(category === "Marketing"){
            categoryBg = "#20B486"
        } else if(category === "Management"){
            categoryBg = "#FFD700"
        } else if(category === "Programming"){
            categoryBg = "#4B0082"
        }
  return (
    <div className="bg-dark-5/15 shadow p-2 rounded-lg max-w-[300px] flex flex-col gap-3 relative">
      <img src={image} alt="" className="rounded-lg h-[180px]" />

      <div className="flex absolute top-2 left-2">
        <div style={{backgroundColor : categoryBg}} className="px-1.5 py-1 text-white flex items-center justify-center rounded-r-lg text-xs">
          {category}
        </div>
      </div>

      {/* <div className='absolute top-2 right-2 bg-neutral-5 p-1 rounded-bl'>
      <ManageCourseActionDropdown/>
      </div> */}

      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-neutral-60 font-bold capitalize">{title}</h1>
          <div className="flex items-center gap-1">
              <img src={star} alt="" />
            <p className="font-normal text-body-text text-[14px]">{rating}</p>
          </div>
        </div>

        <p className="text-neutral-60/80 font-semibold text-xs mt-1">{description}</p>
      </div>

      <div className="flex items-center gap-3">
        <img src={instructorAvatar} alt="" />
        <p>
          <p className="font-semibold text-neutral-60 text-sm">{instructorName}</p>
          <p className="font-normal text-neutral-60 text-xs">{instructorTitle}</p>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-[2px]">
            <img src={enrolled} alt="" className="size-4" />
            <p className="font-normal text-neutral-60 text-xs">{`${enrolledCount} Enrolled`}</p>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src={deadline} alt="" className="size-4" />
            <p className="font-normal text-neutral-60 text-xs">{`${daysLeft} days left`}</p>
          </div>
        </div>

        <h1 className="capitalize font-bold text-2xl text-primary-20">${price}</h1>
      </div>
    </div>
  );
};

export default ManageCourseCard;
