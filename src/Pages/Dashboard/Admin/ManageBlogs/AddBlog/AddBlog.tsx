import AddBlogForm from "./AddBlogForm";


const AddBlog = () => {
    return (
        <div>
            <h1 className="text-body-text font-semibold font-Roboto text-2xl mb-4"><span className="text-primary-10">Add</span> New Blog</h1>
            <AddBlogForm/>
        </div>
    );
};

export default AddBlog;