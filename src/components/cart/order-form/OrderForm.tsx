import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Paper, Typography } from "@mui/material";
import { orderSchema } from "../../../validations/schema";

import { useAddUserOrderMutation } from "../../../services/shopServices/shopApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { clearCart, selectCartItems } from "../../../redux/cart/cartSlice";

import BasicModal from "../../basic-modal/BasicModal";
import BasicButton from "../../basic-button/BasicButton";
import { StyledTextField } from "./OrderForm.styles";

type FormInputTypes = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

const OrderForm = () => {
  const [addUserOrder, { isError, isLoading, isSuccess }] =
    useAddUserOrderMutation();
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  const {
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormInputTypes>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(orderSchema),
  });

  const formData = getValues();

  const onSubmit = async (e: React.SyntheticEvent) => {
    // here i select added items to cart,  to avoid rerendering by inreasing item quantity in cart
    e.preventDefault();
    await addUserOrder({ cartItems, formData });
    reset();
  };

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(clearCart());
    reset();
  }, [isSuccess]);

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h3" gutterBottom>
          Checkout
        </Typography>
        <form onSubmit={onSubmit}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <BasicButton
            type="submit"
            sx={{
              width: "50%",
              display: "flex",
              marginLeft: "auto",
            }}
          >
            Order
          </BasicButton>
        </form>
      </Paper>
      <BasicModal
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />
    </Box>
  );
};

export default OrderForm;
