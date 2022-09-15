import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const Sidebar = React.lazy(() => import("../Sidebar/Sidebar"));

const Layout = () => (
  <Grid container>
    <Sidebar />
    <Header />
    <Grid item xs={10} style={{ margin: "0 auto" }}>
      <Outlet />
    </Grid>
  </Grid>
  /*   <Box>
    <Sidebar />
    <Header />
    <Container maxWidth="xl">
      <Outlet />
    </Container>
  </Box> */
);

export default Layout;
