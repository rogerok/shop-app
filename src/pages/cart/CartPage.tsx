import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import CartTotal from "../../components/cart-total/CartTotal";
import CartList from "../../components/cart-list/CartList";

const CartPage = () => (
  <Grid container spacing={8} mt={4} p={4} component="section">
    <Grid item xs={8}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" mb={4}>
            Корзина
          </Typography>
        </AccordionSummary>
        <Divider />
        <Paper elevation={3} sx={{ p: 3 }}>
          <AccordionDetails>
            <CartList />
          </AccordionDetails>
        </Paper>
      </Accordion>
    </Grid>
    <CartTotal />
  </Grid>
);

export default CartPage;
