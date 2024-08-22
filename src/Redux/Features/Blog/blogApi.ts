import { baseApi } from "../../API/baseApi";

const authApi = baseApi.injectEndpoints({
    // tagTypes: ["blogs"],
    endpoints : (builder) => ({
        createBlog: builder.mutation({
            query : (data) => ({
                url : '/blogs/create-blog',
                method : "POST",
                body : data
            }),
            // invalidatesTags : ["blogs"]
        }),

        getAllBlogs: builder.query({
            query : () => ({
                url : '/blogs',
                method : "GET",
            })
        }),

        getBlogById: builder.query({
            query : (id) => ({
                url : `/blogs/${id}`,
                method : "GET",
            })
        }),

        getBlogByCategory: builder.query({
            query : (category) => ({
                url : `/blogs/category/${category}`,
                method : "GET",
            })
        }),
    })
})

export const { useCreateBlogMutation , useGetAllBlogsQuery, useGetBlogByIdQuery, useGetBlogByCategoryQuery } = authApi;