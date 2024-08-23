
const InstructorRequestCardLoader = () => {
    return (
        <div
        className={`animate-pulse bg-[#1F2937]/30 shadow p-4 rounded-r border-l-4 border-[#D1D5DB] font-Roboto flex flex-col gap-3`}
      >
        <div className="flex items-center justify-between">
          {/* Skeleton for Profile */}
          <div className="flex items-center gap-3 mt-2">
            <div className="bg-[#E5E7EB] h-12 w-12 rounded-full"></div>
            <div>
              <div className="bg-[#E5E7EB] h-6 w-32 mb-2 rounded"></div>
              <div className="bg-[#E5E7EB] h-4 w-24 rounded"></div>
            </div>
          </div>
        </div>
  
        <div className="bg-[#E5E7EB] h-4 w-full rounded mt-2"></div>
        <div className="bg-[#E5E7EB] h-4 w-full rounded my-"></div>
        <div className="bg-[#E5E7EB] h-4 w-full rounded my-"></div>
        <div className="bg-[#E5E7EB] h-4 w-3/4 rounded my-"></div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-7">
            <div className="bg-[#E5E7EB] h-5 w-28 rounded"></div>
            <div className="bg-[#E5E7EB] h-5 w-28 rounded"></div>
          </div>
  
          <div className="flex items-center gap-4">
            <div className="bg-[#E5E7EB] h-10 w-24 rounded"></div>
            <div className="bg-[#E5E7EB] h-10 w-36 rounded"></div>
          </div>
        </div>
      </div>
    );
};

export default InstructorRequestCardLoader;