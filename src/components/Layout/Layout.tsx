import React from "react";
import { Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "../header/Header";
// eslint-disable-next-line import/no-cycle
import Sidebar from "../sidebar/Sidebar";

const Layout = () => (
  <Grid container sx={{ backgroundColor: "yellow" }}>
    <Sidebar />
    <Header />
    <Grid item xs={10} style={{ backgroundColor: "white", margin: "0 auto" }}>
      <Outlet />
    </Grid>
  </Grid>
);

export default Layout;
