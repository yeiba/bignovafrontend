import { apiSlice } from "../services/apiSlice";

export const restaurentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (data) => `/restaurants/restaurantId/${data}`,
    }),
  }),
  overrideExisting: true,
});

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } =
  restaurentsApiSlice;
