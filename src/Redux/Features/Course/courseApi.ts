import { baseApi } from "../../API/baseApi";

const courseApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllCourses: builder.query({
            query : (params) => ({
                url : '/courses',
                method : "GET",
                params: params
            })
        }),

        addCourse: builder.mutation({
            query : (data) => ({
                url : '/courses/create-course',
                method : "POST",
                body: data,
            })
        }),

        getCoursesByCategory: builder.query({
            query : (category) => ({
                url : `/courses/category/${category}`,
                method : "GET",
            })
        }),
    })
})

export const { useGetAllCoursesQuery, useAddCourseMutation ,useGetCoursesByCategoryQuery } = courseApi;