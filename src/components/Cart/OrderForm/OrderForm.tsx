import React, { useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "../../../utils/validations/schema";

import { FormDataType } from "../../../ts/types";
import { useAddUserOrderMutation } from "../../../services/shopServices/shopApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { clearCart, selectCartItems } from "../../../redux/cart/cartSlice";

import Modal from "../../common/Modal/Modal";
import Button from "../../common/Button/Button";
import { StyledTextField } from "./OrderForm.styles";

const OrderForm = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const isCartEmpty = !cartItems.length;

  const [addUserOrder, { isError, isLoading, isSuccess }] =
    useAddUserOrderMutation();

  const {
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormDataType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(orderSchema),
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
        <form onSubmit={onSubmit}>
          <Box display="flex" justifyContent="space-between">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  type="text"
                  label="Your name"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName?.message : ""}
                  margin="normal"
                  variant="outlined"
                  required
                  sx={{ width: "45%" }}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  type="text"
                  label="Your lastname"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName?.message : ""}
                  required
                  margin="normal"
                  variant="outlined"
                  sx={{ width: "45%" }}
                />
              )}
            />
          </Box>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                type="tel"
                label="Your phone number"
                error={!!errors.phoneNumber}
                helperText={
                  errors.phoneNumber ? errors.phoneNumber?.message : ""
                }
                required
                fullWidth
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                type="email"
                label="Your email"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ""}
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            )}
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
