import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Sidebar = React.lazy(() => import("../Sidebar/Sidebar"));

const Layout = () => (
  <Box component="main" position="relative">
    <Sidebar />
    <Header />
    <Grid
      container
      xs={12}
      style={{ margin: "0 auto" }}
      justifyContent="center"
    >
      <Grid item xs={10} minHeight="100vh">
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  </Box>
);

export default Layout;
