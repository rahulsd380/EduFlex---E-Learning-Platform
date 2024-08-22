import { useState } from "react";


const Filter = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='w-[30%] bg-dark-5/50 p-4 rounded-lg h-fit font-Roboto'>
            <div className="flex items-center justify-between">
            <h1 className="text-xl text-body-text font-bold">Filter</h1>
            <p className="text-body-text text-lg">Reset All</p>
            </div>

            <div className="flex flex-col gap-2 mt-5">
            <h1 className=" text-body-text font-medium">Category Filter</h1>

            <div className="flex flex-col gap-3">
                
            <div className="flex items-center gap-[10px]">
              <div
              className={`size-5 border border-neutral-40  rounded-md flex items-center justify-center cursor-pointer `}
              onClick={() => setToggle(!toggle)}
              >
              <div
              className={`${
              toggle
              ? "bg-primary-10 scale-[1]"
              : "bg-transparent scale-[0.7]"
            } size-3 transition-all duration-200 rounded-md`}
              ></div>
              </div>

              <p className=" text-body-text cursor-pointer text-sm"
              onClick={() => setToggle(!toggle)}>Development</p>
        </div>
                
            <div className="flex items-center gap-[10px]">
              <div
              className={`size-5 border border-neutral-40  rounded-md flex items-center justify-center cursor-pointer `}
              onClick={() => setToggle(!toggle)}
              >
              <div
              className={`${
              toggle
              ? "bg-primary-10 scale-[1]"
              : "bg-transparent scale-[0.7]"
            } size-3 transition-all duration-200 rounded-md`}
              ></div>
              </div>

              <p className=" text-body-text cursor-pointer text-sm"
              onClick={() => setToggle(!toggle)}>Development</p>
        </div>
                
            <div className="flex items-center gap-[10px]">
              <div
              className={`size-5 border border-neutral-40  rounded-md flex items-center justify-center cursor-pointer `}
              onClick={() => setToggle(!toggle)}
              >
              <div
              className={`${
              toggle
              ? "bg-primary-10 scale-[1]"
              : "bg-transparent scale-[0.7]"
            } size-3 transition-all duration-200 rounded-md`}
              ></div>
              </div>

              <p className=" text-body-text cursor-pointer text-sm"
              onClick={() => setToggle(!toggle)}>Development</p>
        </div>
                
            <div className="flex items-center gap-[10px]">
              <div
              className={`size-5 border border-neutral-40  rounded-md flex items-center justify-center cursor-pointer `}
              onClick={() => setToggle(!toggle)}
              >
              <div
              className={`${
              toggle
              ? "bg-primary-10 scale-[1]"
              : "bg-transparent scale-[0.7]"
            } size-3 transition-all duration-200 rounded-md`}
              ></div>
              </div>

              <p className=" text-body-text cursor-pointer text-sm"
              onClick={() => setToggle(!toggle)}>Development</p>
        </div>

            </div>
            </div>


        </div>
    );
};

export default Filter;