import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Grid, Box } from "@mui/material";
// eslint-disable-next-line import/no-cycle
import Header from "../header/Header";
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
