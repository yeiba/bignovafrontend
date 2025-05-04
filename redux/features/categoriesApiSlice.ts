import { apiSlice } from "../services/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoreis: builder.query({
      query: () => "/categoreis",
    }),
    getCategoryById: builder.query({
      query: (data) => `/categoreis/categoryId/${data}`,
    }),
  }),
  overrideExisting: true,
});

export const { useGetCategoreisQuery, useGetCategoryByIdQuery } =
  categoriesApiSlice;
