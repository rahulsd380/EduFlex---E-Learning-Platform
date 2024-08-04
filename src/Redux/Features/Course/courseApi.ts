import { baseApi } from "../../API/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllCourses: builder.query({
            query : () => ({
                url : '/courses',
                method : "GET",
            })
        }),

        // signup: builder.mutation({
        //     query: (userInfo) => ({
        //         method : "POST",
        //         url : "/auth/signup",
        //         body : userInfo,
        //     }),
        //     // invalidatesTags : ["products"]
        //   }),
    })
})

export const { useGetAllCoursesQuery } = authApi;