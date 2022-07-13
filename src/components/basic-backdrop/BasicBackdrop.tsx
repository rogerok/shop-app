import React from "react";
import { Backdrop } from "@mui/material";
import StatusLoading from "../status-components/StatusLoading";

const BasicBackdrop = () => (
  <Backdrop open>
    <StatusLoading />
  </Backdrop>
);

export default BasicBackdrop;
