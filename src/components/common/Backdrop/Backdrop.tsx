import React from "react";
import { Backdrop as MuiBackdrop } from "@mui/material";
import StatusLoading from "../StatusComponents/StatusLoading";

const Backdrop = () => (
  <MuiBackdrop open>
    <StatusLoading />
  </MuiBackdrop>
);

export default Backdrop;
