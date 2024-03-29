import React, { useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "../../../utils/validations/validationSchema";

import { useAddUserOrderMutation } from "../../../services/shopApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { clearCart, selectCartItems } from "../../../store/cart/cartSlice";
import { FormDataType } from "../../../ts/types";

import Button from "../../common/Button/Button";
import RequestStatus from "../../common/RequestStatus/RequestStatus";
import TextInput from "../../common/inputs/TextInput";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const OrderForm = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const isCartEmpty = !cartItems.length;

  const [addUserOrder, { isLoading, isSuccess, isError }] =
    useAddUserOrderMutation();

  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormDataType>({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = async (userData: FormDataType) => {
    await addUserOrder({ cartItems, userData });
  };

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(clearCart());
    reset();
  }, [isSuccess]);

  return (
    <Box>
      {isSuccess || isLoading || isError ? (
        <RequestStatus
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          navigateTo="/"
        />
      ) : null}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Checkout
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextInput
            control={control}
            name="firstName"
            type="text"
            label="Your first name"
            required
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextInput
            control={control}
            name="lastName"
            type="text"
            label="Your last name"
            required
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextInput
            control={control}
            name="phoneNumber"
            type="text"
            label="Your phone number"
            required
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextInput
            control={control}
            name="email"
            type="email"
            label="Your email"
            required
            margin="normal"
            fullWidth
            variant="outlined"
          />

          {isCartEmpty && (
            <Typography
              component="span"
              variant="h6"
              color="error"
              sx={{ display: "block", mb: 2 }}
              gutterBottom
            >
              Please add products for order
            </Typography>
          )}
          <Button
            type="submit"
            sx={{
              width: "25%",
              display: "flex",
              mx: "left",
            }}
            disabled={!isValid || isCartEmpty}
          >
            Order
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default OrderForm;
