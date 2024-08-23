import { useState } from "react";
import Modal1 from "../../../../Components/Modals/Modal1";
import cross from "../../../../assets/Icons/cross.svg";
import { useForm } from "react-hook-form";
import plus from "../../../../assets/Icons/plus-icon.svg";
import remove from "../../../../assets/Icons/remove.svg";
import edit from "../../../../assets/Icons/edit.svg";
import {
  useCreateFaqMutation,
  useGetAllFaqsQuery,
  useUpdateFaqMutation,
} from "../../../../Redux/Features/Blog/faqApi";
import { toast } from "sonner";
import Modal2 from "../../../../Components/Modals/Modal2";

type TFaqData = {
    _id : string
  title: string;
  description: string;
};

const ManageFaq = () => {
    const [updateFaq] = useUpdateFaqMutation(undefined);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const isLoading = false;
  const [createFaq] = useCreateFaqMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFaqData>();

  const handleAddFaq = async (data: TFaqData) => {
    const faqData = {
      title: data.title,
      description: data.description,
    };

    try {
      const res = await createFaq(faqData).unwrap();
      toast.success(res.message);
      setOpenModal1(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const [isOpen, setIsOpen] = useState<number | null | string>(null);

  const { data: allFaqs, isLoading: isFaqFetching } = useGetAllFaqsQuery(undefined);

  if (isFaqFetching) {
    return <p>Loading...</p>;
  }

  const toggle = (index: string) => {
    setIsOpen((prevIdx) => (prevIdx === index ? null : index));
  };

 

  const handleUpdateFaq = async (data: TFaqData, id) => {
    const faqData = {
      title: data.title,
      description: data.description,
    };

    try {
      const res = await updateFaq(faqData, id).unwrap();
      toast.success(res.message);
      setOpenModal1(false);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <button
          onClick={() => setOpenModal1(true)}
          className="border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full md:w-fit bg-primary-10 text-white flex justify-center items-center gap-2  text-xs md:text-base"
        >
          <img src={plus} alt="" className="size-6" />
          Add New FAQ
        </button>
      </div>

      {/* Faq */}
      <div className="w-full mt-10">
        {allFaqs?.data?.map((faq: TFaqData) => (
          <div key={faq._id} className="border-b border-gray-500/50 py-3">
            <div className="flex items-center gap-4">
            <button
              onClick={() => toggle(faq._id)}
              className="flex h-full w-full justify-between font-medium outline-none text-neutral-60"
            >
              <span>{faq.title}</span>
              <span className="rounded-full p-2">
                <svg
                  className="ml-8 size-3 shrink-0 "
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === faq._id && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === faq._id && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
            </button>

            <div className="flex items-center gap-3">
            <img src={remove} alt="" className="size-5 cursor-pointer" />
            <img onClick={() => setOpenModal2(true)} src={edit} alt="" className="size-5 cursor-pointer" />
            </div>
            </div>
            <div
              className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
                isOpen === faq._id
                  ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pr-4 text-sm text-neutral-60">
                {faq.description}
              </div>
            </div>

            <Modal2
        openModal2={openModal2}
        setOpenModal2={setOpenModal2}
        classNames="w-[500px]"
      >
        {/* Heading */}
        <div className="flex items-center justify-between border-b border-dark-10/60 pb-2">
          <h1 className="text-xl text-body-text font-semibold">
            Update <span className="text-primary-10">FAQ Details</span>
          </h1>
          <img
            onClick={() => setOpenModal2(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        {/* Add faq Form */}
        <form
          onSubmit={handleSubmit((data) => handleUpdateFaq(data, faq._id))}
          className="flex flex-col gap-3 mt-5"
        >
          {/* Title */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Title</p>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              defaultValue={faq.title}
              id="title"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full name"
            />
            {errors.title && (
              <span className="text-warning-10 text-start">
                {errors.title.message as string}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Description</p>
            <textarea
            defaultValue={faq.description}
              rows={5}
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full name"
            />
            {errors.description && (
              <span className="text-warning-10 text-start">
                {errors.description.message as string}
              </span>
            )}
          </div>

          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`${
                isLoading
                  ? "animate-pulse bg-primary-10 text-white font-medium w-full px-4 py-3 rounded focus:outline-none"
                  : "animate-none bg-primary-10 text-white font-medium px-7 py-2 w-fit rounded shadow-md focus:outline-none hover:bg-primary-10/90"
              }`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </Modal2>
          </div>

          
        ))}
      </div>

      <Modal1
        openModal1={openModal1}
        setOpenModal1={setOpenModal1}
        classNames="w-[500px] p-4"
      >
        {/* Heading */}
        <div className="flex items-center justify-between border-b border-dark-10/60 pb-2">
          <h1 className="text-xl text-body-text font-semibold">
            Add New <span className="text-primary-10">FAQ</span>
          </h1>
          <img
            onClick={() => setOpenModal1(false)}
            src={cross}
            alt=""
            className="size-7 cursor-pointer"
          />
        </div>

        {/* Add faq Form */}
        <form
          onSubmit={handleSubmit(handleAddFaq)}
          className="flex flex-col gap-3 mt-5"
        >
          {/* Title */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Title</p>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="title"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full name"
            />
            {errors.title && (
              <span className="text-warning-10 text-start">
                {errors.title.message as string}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm">Description</p>
            <textarea
              rows={5}
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
              placeholder="Enter your full name"
            />
            {errors.description && (
              <span className="text-warning-10 text-start">
                {errors.description.message as string}
              </span>
            )}
          </div>

          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`${
                isLoading
                  ? "animate-pulse bg-primary-10 text-white font-medium w-full px-4 py-3 rounded focus:outline-none"
                  : "animate-none bg-primary-10 text-white font-medium px-7 py-2 w-fit rounded shadow-md focus:outline-none hover:bg-primary-10/90"
              }`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </Modal1>

     
    </div>
  );
};

export default ManageFaq;
