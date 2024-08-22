import { TBlog } from "./blog.interface";
import Blog from "./blog.model";

const createBlog = async (payload : TBlog) => {
    const result = await Blog.create(payload);
    return result;
};

const getAllBlogs = async () => {
    const result = await Blog.find();
    return result;
};

const getSingleBlogById = async (id:string) => {
    const result = await Blog.findById(id);
    return result;
};

const getBlogByCategory = async (category:string) => {
    const result = await Blog.find({category : category});
    return result;
};

const updateBlog = async (id:string, payload : Partial<TBlog>) => {
    const result = await Blog.findByIdAndUpdate(id, payload , {
        new:true
    });
    return result;
};

export const BlogServices = {
    createBlog,
    getAllBlogs,
    getSingleBlogById,
    updateBlog,
    getBlogByCategory,
}