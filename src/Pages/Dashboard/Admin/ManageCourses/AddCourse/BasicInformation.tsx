

const BasicInformation = ({register, errors}) => {
    const categories = [
        { value: "development", label: "Development" },
        { value: "marketing", label: "Marketing" },
        { value: "design", label: "Design" },
        { value: "management", label: "Management" },
      ];
    return (
        <div className="flex flex-col gap-4">
                {/* Course Title */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-body-text font-medium text-sm">
                    Course Title
                  </p>
                  <input
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    id="title"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course title."
                  />
                  {errors.title && (
                    <span className="text-warning-10 text-start">
                      {errors.title.message as string}
                    </span>
                  )}
                </div>

                {/* Category & Course Duration */}
                <div className="flex items-center gap-5">
                  {/* Category */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">
                      Category
                    </p>
                    <select
                      {...register("category", {
                        required: "Category is required",
                      })}
                      id="category"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
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

                  {/* Course Duration */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">
                      Course Duration
                    </p>
                    <input
                      {...register("courseDuration", {
                        required: "Course Duration is required",
                      })}
                      type="text"
                      id="courseDuration"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                      placeholder="Enter course title."
                    />
                    {errors.courseDuration && (
                      <span className="text-warning-10 text-start">
                        {errors.courseDuration.message as string}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price & Language */}
                <div className="flex items-center gap-5">
                  {/* Price */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">Price</p>
                    <input
                      {...register("price", { required: "Price is required" })}
                      type="text"
                      id="price"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                      placeholder="Enter course title."
                    />
                    {errors.price && (
                      <span className="text-warning-10 text-start">
                        {errors.price.message as string}
                      </span>
                    )}
                  </div>

                  {/* Languge */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-body-text font-medium text-sm">
                      Languge
                    </p>
                    <input
                      {...register("language", {
                        required: "Language is required",
                      })}
                      type="text"
                      id="language"
                      className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                      placeholder="Enter course title."
                    />
                    {errors.language && (
                      <span className="text-warning-10 text-start">
                        {errors.language.message as string}
                      </span>
                    )}
                  </div>
                </div>

                <input type="file" name="" id="" />
              </div>
    );
};

export default BasicInformation;