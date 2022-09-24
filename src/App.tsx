import React, { FC, Suspense } from "react";

import { Box } from "@mui/material";
import { AppRouter } from "./router/routesManager";

import Backdrop from "./components/common/Backdrop/Backdrop";
import Snackbar from "./components/common/Snackbar/Snackbar";

const App: FC = () => (
  <Suspense fallback={<Backdrop />}>
    <Box>
      <AppRouter />
      <Snackbar />
    </Box>
  </Suspense>
);

export default App;
