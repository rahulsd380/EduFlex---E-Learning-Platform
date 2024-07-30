// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
//   tagTypes: ["products",],
  endpoints: (builder) => ({

    signup: builder.mutation({
        query: (data) => ({
            method : "POST",
            url : "/auth/signup",
            body : data,
        }),
        // invalidatesTags : ["products"]
      }),
    // getAllProducts: builder.query({
    //     query: () => ({
    //         method : "GET",
    //         url : "/products",
    //     }),
    //     providesTags : ["products"]
    //   }),

    // createProduct: builder.mutation({
    //     query: (data) => ({
    //         method : "POST",
    //         url : "/products/create-product",
    //         body : data,
    //     }),
    //     invalidatesTags : ["products"]
    //   }),

    //   updateProduct: builder.mutation({
    //     query: ({ id, data }) => ({
    //       method: "PUT",
    //       url: `/products/update-product/${id}`,
    //       body: data,
    //     }),
    //     invalidatesTags: ["products"],
    //   }),

    //   deleteProduct: builder.mutation({
    //     query: (id) => ({
    //       method: "DELETE",
    //       url: `/products/delete-product/${id}`,
    //     }),
    //     invalidatesTags: ["products"],
    //   }),

  }),
});

export const { useSignupMutation } = baseApi;