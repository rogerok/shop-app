import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { selectUserToken } from "../../store/user/userSlice";

const RequireAuth = () => {
  const location = useLocation();
  const auth = useAppSelector(selectUserToken);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
