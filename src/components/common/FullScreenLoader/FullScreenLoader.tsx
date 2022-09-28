import React from "react";
import { Backdrop as MuiBackdrop } from "@mui/material";
import Spinner from "../Spinner/Spinner";

const FullScreenLoader = () => (
  <MuiBackdrop open>
    <Spinner />
  </MuiBackdrop>
);

export default FullScreenLoader;
