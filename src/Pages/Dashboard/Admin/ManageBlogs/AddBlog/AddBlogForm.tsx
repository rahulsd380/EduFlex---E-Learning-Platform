import { useForm } from "react-hook-form";
import BlogImgUpload from "../BlogImgUpload";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { useCreateBlogMutation } from "../../../../../Redux/Features/Blog/blogApi";
import { toast } from "sonner";

const AddBlogForm = () => {
  const img = "www.defaultimg.com";
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (content?.length < 100) {
      setContentError("Content must be at least 100 characters long");
    } else {
      setContentError(""); // Clear the error if content length is fine
    }
  }, [content]); // Runs whenever `content` changes

  const categories = [
    { value: "development", label: "Development" },
    { value: "marketing", label: "Marketing" },
    { value: "design", label: "Design" },
    { value: "management", label: "Management" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  const addBlog = async (data: any) => {
    const blogData = {
      blogImgUrl: img,
      title: data.title,
      category: data.category,
      tags: tags,
      author: data.author,
      blogContent: content,
      publishedAt: getCurrentDate(),
    };

    try {
      const response = await createBlog(blogData);
      console.log("API Response:", response.data);

      if (response.data.success === true) {
        toast.success(response.data.message);
      } else {
        toast.error("Failed to create blog");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("An error occurred while creating the blog");
    }
  };
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault(); // Prevent form submission
      const capitalizedInput = inputValue
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
      setTags([...tags, capitalizedInput]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="bg-dark-5/30 p-5 rounded-lg">
      <form onSubmit={handleSubmit(addBlog)} className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <div className="w-full lg:w-[40%]">
            <BlogImgUpload />
          </div>

          {/* Other fields */}
          <div className="md:w-[60%] flex flex-col gap-4 bg-white rounded-lg w-full p-4 rounded-lg">
            {/* Category */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-body-text font-medium text-sm">Category</p>
              <select
                {...register("category", { required: "Category is required" })}
                id="category"
                className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="text-warning-10 text-start">
                  {errors.category.message as string}
                </span>
              )}
            </div>

            {/* Blog Title */}
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

            {/* Tags */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-body-text font-medium text-sm">Tags</p>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                  placeholder="Add a tag and press Enter"
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-10 text-white px-2 py-1 rounded"
                    >
                      {tag}
                      <button
                        type="button"
                        className="ml-2 text-red-500"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="flex flex-col gap-1 w-full">
              <p className="text-body-text font-medium text-sm">Author</p>
              <input
                {...register("author", { required: "author is required" })}
                type="text"
                id="author"
                className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                placeholder="Enter the blog author name"
              />
              {errors.author && (
                <span className="text-warning-10 text-start">
                  {errors.author.message as string}
                </span>
              )}
            </div>

            {/* Blog Description */}
            {/* <div className="flex flex-col gap-1 w-full">
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
          </div> */}
          </div>
        </div>

        {/* Blog Content */}
        <div className="flex flex-col gap-1 w-full bg-white p-4 rounded-lg">
          <p className="text-body-text font-medium text-sm">Blog Content</p>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          {contentError && (
            <span className="text-warning-10 text-start">{contentError}</span>
          )}
        </div>

        <div className="flex justify-center lg:justify-end mb-10 w-full">
          <button className="px-3 py-2 max-w-[150px] bg-primary-10 text-white w-full rounded">
            {isLoading ? "Creating..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
