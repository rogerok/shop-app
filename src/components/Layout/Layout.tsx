import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Grid, Box } from "@mui/material";
import Header from "../header/Header";

const Layout = () => (
  <Grid container sx={{ backgroundColor: "yellow" }}>
    <Header />
    <Grid item xs={10} style={{ backgroundColor: "white", margin: "0 auto" }}>
      <Outlet />
    </Grid>
  </Grid>
);

export default Layout;
