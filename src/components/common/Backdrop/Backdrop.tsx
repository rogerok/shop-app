import React from "react";
import { Backdrop as MuiBackdrop } from "@mui/material";
import Spinner from "../Spinner/Spinner";

const Backdrop = () => (
  <MuiBackdrop open>
    <Spinner />
  </MuiBackdrop>
);

export default Backdrop;
