import { apiSlice } from "../services/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/get-users",
    }),
    getUserById: builder.query({
      query: (data) => `/get-user-by-id?id=${data}`,
    }),
    getUserProfile: builder.query({
      query: () => "/user-profile",
    }),
    oauthRegister: builder.mutation({
      query: (data) => ({
        url: "/oauth-subscribe",
        method: "POST",
        body: data,
      }),
    }),
    oauthLogin: builder.mutation({
      query: (data) => ({
        url: "/oauth-participate",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login-dashboard",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserProfileQuery,
} = categoriesApiSlice;
