import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Sidebar from "./components/nav/Sidebar";
import Header from "./components/header/Header";

import { routes } from "./routes";

const App: FC = () => {
  const elements = useRoutes(routes);
  return (
    <Grid container spacing="2">
      {elements}
    </Grid>
  );
};

export default App;
