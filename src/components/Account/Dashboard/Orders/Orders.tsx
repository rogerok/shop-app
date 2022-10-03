import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Stack, Typography, Grid, Box } from "@mui/material";
import { StyledPaper } from "../../Account.styles";
import IconLink from "../../../common/IconLink/IconLink";
import CustomLink from "../../../common/CustomLink/CustomLink";
import { RoutesNames } from "../../../../router/routes";

const Orders = () => (
  <StyledPaper>
    <CustomLink
      to={`/${RoutesNames.ACCOUNT_PAGE}/${RoutesNames.ACCOUNT_ORDERS}`}
    >
      <Box>
        <Typography variant="h5" textTransform="initial">
          Orders
        </Typography>

        <ShoppingCartIcon sx={{ fontSize: "10rem" }} />
      </Box>
    </CustomLink>
  </StyledPaper>
);

export default Orders;
