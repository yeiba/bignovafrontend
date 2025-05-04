"use client";

import { useAuthQuery } from "@/redux/features/UsersApiSlice";
// import { useGetAllUsersQuery } from "@/redux/features/usersQuerySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function useUserDataHook() {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);
  const { data } = useAuthQuery("");
  // const { data, isLoading, isSuccess, isError, error } =
  //   useGetAllUsersQuery("");
  const isLoggedIn = isAuthenticated;

  return {
    isLoggedIn,
    role,
    data,
  };
}
