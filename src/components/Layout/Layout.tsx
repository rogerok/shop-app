import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Sidebar = React.lazy(() => import("../Sidebar/Sidebar"));

const Layout = () => (
  <Grid container>
    <Sidebar />
    <Header />
    <Grid item xs={10} style={{ margin: "0 auto", minHeight: "100vh" }}>
      <Outlet />
    </Grid>
    <Footer />
  </Grid>
);

export default Layout;
