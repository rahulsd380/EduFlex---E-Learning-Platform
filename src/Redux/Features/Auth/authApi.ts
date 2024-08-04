import { baseApi } from "../../API/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        login: builder.mutation({
            query : (userInfo) => ({
                url : '/auth/login',
                method : "POST",
                body: userInfo,
            })
        }),

        signup: builder.mutation({
            query: (userInfo) => ({
                method : "POST",
                url : "/auth/signup",
                body : userInfo,
            }),
            // invalidatesTags : ["products"]
          }),
    })
})

export const {useLoginMutation, useSignupMutation} = authApi;