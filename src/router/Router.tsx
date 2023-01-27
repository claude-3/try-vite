import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home">
        <Route index element={<Home />} />
        <Route path="user_management" element={<UserManagement />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
});
