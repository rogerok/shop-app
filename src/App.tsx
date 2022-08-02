import React, { FC, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { Box, Grid } from "@mui/material";
import { routes } from "./router/routesManager";

import Backdrop from "./components/common/Backdrop/Backdrop";

const App: FC = () => {
  const elements = useRoutes(routes);
  return (
    <Suspense fallback={<Backdrop />}>
      <Box>{elements}</Box>;
    </Suspense>
  );
};

export default App;
