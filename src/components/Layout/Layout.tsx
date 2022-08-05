import React from "react";
import { Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
// eslint-disable-next-line import/no-cycle
import Sidebar from "../Sidebar/Sidebar";
import { useAppSelector } from "../../hooks/redux";
import { selectIsSidebarOpen } from "../../redux/ui/uiSlice";

const Layout = () => {
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen);
  return (
    <Grid container>
      <Sidebar />
      <Header />
      <Grid item xs={10} style={{ margin: "0 auto" }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
