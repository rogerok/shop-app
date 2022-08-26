import React from "react";
import { useLocation, useNavigate, Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { selectUserToken } from "../../redux/user/userSlice";

const RequireAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAppSelector(selectUserToken);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
