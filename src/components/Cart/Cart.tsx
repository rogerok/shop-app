import React, { useCallback } from "react";
import { Grid, Container, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Accordion from "../common/Accordion/Accordion";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import OrderForm from "./OrderForm/OrderForm";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { selectCartItems } from "../../redux/cart/cartSlice";
import { useAddUserOrderMutation } from "../../services/shopServices/shopApi";
import { orderSchema } from "../../utils/validations/schema";

type FormInputTypes = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

const Cart = () => {
  /*   const [addUserOrder, { isError, isLoading, isSuccess }] =
    useAddUserOrderMutation();
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  const { control, formState, getValues, reset } = useForm<FormInputTypes>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(orderSchema),
  });

  const formData = getValues();

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      await addUserOrder({ cartItems, formData });
      reset();
    },
    [formData]
  ); */
  const cartItems = useAppSelector(selectCartItems);

  return (
    <Grid
      container
      spacing={6}
      mt={2}
      p={2}
      component="section"
      alignItems="baseline"
    >
      <Grid item xs={8}>
        <Accordion title="Cart">
          <CartList cartItems={cartItems} />
        </Accordion>
      </Grid>
      <Grid container item spacing={4} xs={4}>
        <Container>
          <Box mb={4}>
            <CartTotal />
          </Box>
          <Box>
            <OrderForm cartItems={cartItems} />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
export default Cart;
