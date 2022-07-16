import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import { Box, Grid } from "@mui/material";
import { routes } from "./router/routesManager";

const App: FC = () => {
  const elements = useRoutes(routes);
  return <Box>{elements}</Box>;
};

export default App;
