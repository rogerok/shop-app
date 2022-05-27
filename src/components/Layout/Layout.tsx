import React from "react";
import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Header from "../header/Header";

const Layout = () => (
  <Grid item xs={12}>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </Grid>

  /*   <Grid container spacing="2">
    <Header />
    <Outlet />
  </Grid> */
);

export default Layout;
