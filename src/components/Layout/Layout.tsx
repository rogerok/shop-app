import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "../header/Header";
// eslint-disable-next-line import/no-cycle
import Sidebar from "../sidebar/Sidebar";

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
