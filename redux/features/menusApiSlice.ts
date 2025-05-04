import { apiSlice } from "../services/apiSlice";

export const menusApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => "menus",
    }),
    getMenuById: builder.query({
      query: (data) => `menus/menuId/${data}`,
    }),
    getMenusByRestaurantId: builder.query({
      query: (data) => `menus/restaurantId/${data}`,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetMenuByIdQuery,
  useGetMenusQuery,
  useGetMenusByRestaurantIdQuery,
} = menusApiSlice;
