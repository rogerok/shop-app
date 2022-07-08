import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CartTotal from "../../components/cart-total/CartTotal";
import CartList from "../../components/cart-list/CartList";
import OrderForm from "../../components/order-form/OrderForm";
import BasicModal from "../../components/basic-modal/BasicModal";

const CartPage = () => (
  <Grid
    container
    spacing={6}
    mt={2}
    p={2}
    component="section"
    alignItems="baseline"
  >
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
    <Grid container spacing={4} item xs={4}>
      <Container>
        <Box mb={4}>
          <CartTotal />
        </Box>
        <Box>
          <OrderForm />
        </Box>
      </Container>
    </Grid>
  </Grid>
);

export default CartPage;
