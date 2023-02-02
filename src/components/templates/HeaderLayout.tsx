import { FC, memo, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/layout/Header";

export const HeaderLayout: FC = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
