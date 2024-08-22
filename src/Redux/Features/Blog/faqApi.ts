import { baseApi } from "../../API/baseApi";

const faqApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        createFaq: builder.mutation({
            query : (data) => ({
                url : '/faqs/create-faq',
                method : "POST",
                body : data
            }),
            invalidatesTags : ["faqs"]
        }),

        getAllFaqs: builder.query({
            query : () => ({
                url : '/faqs',
                method : "GET",
            }),
            providesTags: ["faqs"],
        }),

        updateFaq: builder.mutation({
            query : ({id, data}) => ({
                url : `/faqs/${id}`,
                method : "PUT",
                body : data,
            }),
            // providesTags: ["faqs"],
        }),
    })
})

export const { useCreateFaqMutation, useGetAllFaqsQuery, useUpdateFaqMutation } = faqApi;