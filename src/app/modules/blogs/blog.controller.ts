import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

// Create blog route
const createBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlog(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog created successfully.',
      data: result,
    });
  });

// Get all blogs route
const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogs();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blogs fetched successfully.',
      data: result,
    });
  });

// Get single blog route
const getSingleBlogById = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await BlogServices.getSingleBlogById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blogs fetched successfully.',
      data: result,
    });
  });

// Get blogs by category route
const getBlogByCategory = catchAsync(async (req, res) => {
    const {category} = req.params;
    const result = await BlogServices.getBlogByCategory(category);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blogs fetched successfully.',
      data: result,
    });
  });

// Update blog route
const updateBlog = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await BlogServices.updateBlog(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog updated successfully.',
      data: result,
    });
  });

  export const BlogControllers = {
    createBlog,
    getAllBlogs,
    getSingleBlogById,
    updateBlog,
    getBlogByCategory,
  }