import React, { useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../../utils/validations/validationSchema";

import { FormDataType } from "../../../ts/types";
import { useAddUserOrderMutation } from "../../../services/shopServices/shopApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { clearCart, selectCartItems } from "../../../redux/cart/cartSlice";

import Modal from "../../common/Modal/Modal";
import Button from "../../common/Button/Button";
import TextField from "../../common/TextField/TextField";

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

  const [addUserOrder, { isError, isLoading, isSuccess }] =
    useAddUserOrderMutation();

  const { control, getValues, reset } = useForm<FormDataType>({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = getValues();
    await addUserOrder({ cartItems, formData });
  };

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(clearCart());
    reset();
  }, [isSuccess]);

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Checkout
        </Typography>
        <form onSubmit={onSubmit} noValidate>
          <TextField
            control={control}
            name="firstName"
            type="text"
            label="Your first name"
            required
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            control={control}
            name="lastName"
            type="text"
            label="Your last name"
            required
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
            control={control}
            name="phoneNumber"
            type="text"
            label="Your phone number"
            required
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <TextField
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
            disabled={isCartEmpty}
          >
            Order
          </Button>
        </form>
      </Paper>
      <Modal isLoading={isLoading} isSuccess={isSuccess} isError={isError} />
    </Box>
  );
};

export default OrderForm;
