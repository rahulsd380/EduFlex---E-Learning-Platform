import React from "react";

const BlogsCardLoader: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 border border-dark-5 rounded-xl animate-pulse">
      {/* Img */}
      <div className="relative">
        <div className="w-full h-[200px] bg-[#e0e0e0] rounded-t-xl"></div>
        <div className="bg-[#e0e0e0] px-3 py-1 rounded-l-md rounded-br-md absolute right-0 top-3 h-6 w-24"></div>
      </div>

      <div className="p-2 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <div className="bg-[#e0e0e0] rounded px-3 py-[2px] h-6 w-16"></div>
          <div className="h-4 w-20 bg-[#e0e0e0] rounded"></div>
        </div>

        <div className="h-6 w-3/4 bg-[#e0e0e0] rounded mb-2"></div>

        <div className="h-4 w-full bg-[#e0e0e0] rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-[#e0e0e0] rounded mb-2"></div>
        <div className="h-4 w-4/6 bg-[#e0e0e0] rounded mb-2"></div>

        <div className="flex items-center justify-between w-full">
          <div className="h-4 w-24 bg-[#e0e0e0] rounded"></div>
          <div className="h-4 w-24 bg-[#e0e0e0] rounded"></div>
        </div>

        <div className="px-4 py-3 rounded-md border border-dark-10 bg-[#e0e0e0] h-12 w-40"></div>
      </div>
    </div>
  );
};

export default BlogsCardLoader;
