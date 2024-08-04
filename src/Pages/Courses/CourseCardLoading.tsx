import React from "react";

const CourseCardLoading: React.FC = () => {
  return (
    <div className="bg-white animate-pulse rounded-lg shadow p-6 flex flex-col gap-5 group">
      <div className="relative">
        <div className="h-[240px] bg-[#e0e0e0] rounded-md"></div>
        <div className="bg-white rounded backdrop-blur-lg px-[10px] py-1 flex items-center gap-2 absolute right-2 top-2 text-sm">
          <div className="h-4 w-8 bg-[#e0e0e0] rounded"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 bg-[#e0e0e0] rounded mb-2"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 w-1/2 bg-[#e0e0e0] rounded mb-2"></div>
          <div className="h-6 w-6 bg-[#e0e0e0] rounded"></div>
        </div>
        <div className="h-4 w-full bg-[#e0e0e0] rounded mb-2"></div>
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[5px]">
            <div className="h-4 w-4 bg-[#e0e0e0] rounded"></div>
            <div className="h-4 w-4 bg-[#e0e0e0] rounded"></div>
            <div className="h-4 w-4 bg-[#e0e0e0] rounded"></div>
            <div className="h-4 w-4 bg-[#e0e0e0] rounded"></div>
            <div className="h-4 w-4 bg-[#e0e0e0] rounded"></div>
          </div>
          <div className="h-4 w-16 bg-[#e0e0e0] rounded"></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-[#e0e0e0] rounded-full"></div>
          <div>
            <div className="h-4 w-24 bg-[#e0e0e0] rounded mb-1"></div>
            <div className="h-4 w-20 bg-[#e0e0e0] rounded"></div>
          </div>
        </div>

        <div className="h-6 w-24 bg-[#e0e0e0] rounded"></div>
      </div>
    </div>
  );
};

export default CourseCardLoading;
