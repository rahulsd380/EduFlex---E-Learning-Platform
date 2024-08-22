import { useForm } from "react-hook-form";
import BlogImgUpload from "./BlogImgUpload";
import addBlog from "../../../../assets/Icons/add-blog.svg"
import cross from "../../../../assets/Icons/cross.svg"

const AddBlogModal = ({openAddBlogModal, setOpenAddBlogModal}) => {

    const categories = [
        { value: 'development', label: 'Development' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'design', label: 'Design' },
        { value: 'management', label: 'Management' },
      ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    

    <div className="mx-auto flex w-72 items-center justify-center">
        <div onClick={() => setOpenAddBlogModal(false)} className={`fixed z-[100] flex items-center justify-center ${openAddBlogModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
          <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg p-5 bg-gradient-to-bl from-[#f3f3f3] to-[#ffffff] dark:bg-gray-900 drop-shadow-2xl max-w-[700px] ${openAddBlogModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>

            <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img src={addBlog} alt="" className="size-6"/>
              <h1 className="text-2xl text-neutral-60 font-bold capitalize">Add New Blog</h1>
            </div>

            <img onClick={() => setOpenAddBlogModal(false)} src={cross} alt="" className="size-10 cursor-pointer"/>
            </div>

            

          <div className="flex gap-5 w-full">
        <div className="">
        <BlogImgUpload/>
        </div>

        <div className="flex flex-col gap-4 w-full bg-white p-3 rounded-lg">

            {/* Category */}
          <div className="flex flex-col gap-1 w-full">
        <p className="text-body-text font-medium text-sm">Category</p>
        <select
          {...register("category", { required: "Category is required" })}
          id="category"
          className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
        >
          <option value="" disabled selected>Select a category</option>
          {categories.map(category => (
            <option key={category.value} value={category.value}>{category.label}</option>
          ))}
        </select>
        {errors.category && (
          <span className="text-warning-10 text-start">
            {errors.category.message as string}
          </span>
        )}
      </div>


          {/* Name */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Blog Title</p>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="title"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter the blog title"
            />
            {errors.title && (
              <span className="text-warning-10 text-start">
                {errors.title.message as string}
              </span>
            )}
          </div>

          {/* Blog Description */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Blog Description</p>
            <textarea
            {...register("blog_description", { required: "Blog description is required" })}
            rows={5 }
            name="" 
            id="blog_description" 
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter the blog description"/>
            {errors.blog_description && (
              <span className="text-warning-10 text-start">
                {errors.blog_description.message as string}
              </span>
            )}
          </div>

          <div className="flex justify-end">
                <button className="px-3 py-2 max-w-[150px] bg-primary-10 text-white w-full rounded">
            Submit
          </button>
                </div>
            


        </div>
    </div>

          </div>
        </div>
      </div>
  );
};

export default AddBlogModal;
