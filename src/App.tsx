import React, { Suspense } from "react";
import { Box } from "@mui/material";

import { AppRouter } from "./router/routesManager";

import FullScreenLoader from "./components/common/FullScreenLoader/FullScreenLoader";
import Snackbar from "./components/common/Snackbar/Snackbar";

const App = () => (
  <Suspense fallback={<FullScreenLoader />}>
    <Box>
      <AppRouter />
      <Snackbar />
    </Box>
  </Suspense>
);

export default App;
