import React, { FC, Suspense } from "react";

import { Box } from "@mui/material";
import { AppRouter } from "./router/routesManager";

import Backdrop from "./components/common/Backdrop/Backdrop";

const App: FC = () => (
  <Suspense fallback={<Backdrop />}>
    <Box>
      <AppRouter />
    </Box>
  </Suspense>
);

export default App;
