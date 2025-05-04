import { apiSlice } from "../services/apiSlice";

export const dishesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: () => "dishes",
    }),
    getDishById: builder.query({
      query: (data) => `dishes/dishId/${data}`,
    }),
  }),
  overrideExisting: true,
});

export const { useGetDishByIdQuery, useGetDishesQuery } = dishesApiSlice;
