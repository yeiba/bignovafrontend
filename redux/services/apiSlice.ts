import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "@/config/config";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { setCredentials } from "../features/authSlice";
import { logout } from "../features/authSlice";

type RefreshResponse = {
  responseData: Record<string, unknown>;
};

// create a new mutex
const baseQuery = fetchBaseQuery({
  baseUrl: "https://bignovabackend.onrender.com/api/v1",
  prepareHeaders: (headers) => {
    headers.set("x-api-key", config.NEXT_PUBLIC_API_KEY);
    return headers;
  },
  credentials: "include",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // try to get a new token
  const refreshResult = await baseQuery(
    {
      url: "users/authenticate",
      method: "GET",
    },
    api,
    extraOptions
  );
  console.log(refreshResult);
  if (refreshResult?.error?.status === 401) {
    console.log("Cookie verification failde");
    // console.log(refreshResult.error);
    api.dispatch(logout());
    console.log(refreshResult);
  } else if (refreshResult?.meta?.response?.status === 200) {
    console.log("Cookie verification OK");

    console.log(refreshResult?.data);
    // store the new token
    api.dispatch(
      setCredentials((refreshResult?.data as RefreshResponse)?.responseData)
    );
    // retry the initial query
    result = await baseQuery(args, api, extraOptions);
    console.log(refreshResult);
  } else if (refreshResult?.error?.status === "FETCH_ERROR") {
    console.log(refreshResult.error);
    console.log("server verification failde");
    api.dispatch(logout());
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Users", "categories", "restaurants", "menus", "dishes"],
  endpoints: (builder) => ({}),
});
