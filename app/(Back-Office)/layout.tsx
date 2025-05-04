"use client";

import { useUserDataHook } from "@/hooks";

interface Props {
  children: React.ReactNode;
  login: React.ReactNode;
}
export default function Layout({ children, login }: Props) {
  const { isLoggedIn, role, data } = useUserDataHook();

  const isAuthorized = isLoggedIn;
  console.log(data);
  return isAuthorized ? <div>{children}</div> : <div>{login}</div>;
}
