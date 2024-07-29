import blogImg from "../../../../assets/Images/Blog/1.png";
import avatar1 from "../../../../assets/Images/Avatar.png";
import { Link } from "react-router-dom";

const ManageBlogs = () => {
    return (
        <Link to={`/${'admin/blog-details'}`}>
            <div className="bg-neutral-40/10 shadow hover:shadow-lg transition duration-300 rounded-xl max-w-[270px] cursor-pointer">
                <img src={blogImg} alt="" className="rounded-t-xl h-44"/>

                <div className="p-4 rounded-b-xl flex flex-col gap-3">
                    <div className="flex ">
                    <div className="bg-primary-10 px-1.5 py-1 text-white flex items-center justify-center rounded-[100px] text-xs">
                        Development
                    </div>
                    </div>
                <h1 className="text-xl text-neutral-60 font-semibold capitalize">
            How to make website?
          </h1>

          <p className="text-body-text font-semibold text-[11px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et ducimus commodi tempore? Odi.</p>

          <div className="flex items-center gap-3">
                <img src={avatar1} alt="" />
                <p>
                  <p className="font-semibold text-neutral-60 text-[15px]">
                    {"Rahul Sutradhar"}
                  </p>
                  <p className="font-normal text-neutral-60 text-[11px]">
                    {"7"} days ago
                  </p>
                </p>
              </div>
                </div>
            </div>
        </Link>
    );
};

export default ManageBlogs;