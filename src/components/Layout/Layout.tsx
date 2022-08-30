import React from "react";
import { Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
const Sidebar = React.lazy(() => import("../Sidebar/Sidebar"));

const Layout = () => (
  <Grid container>
    <Sidebar />
    <Header />
    <Grid item xs={10} style={{ margin: "0 auto" }}>
      <Outlet />
    </Grid>
  </Grid>
);

export default Layout;
