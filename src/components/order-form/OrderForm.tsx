import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Paper, Typography } from "@mui/material";
import { orderSchema } from "../../validations/schema";

import { useAddUserOrderMutation } from "../../services/shopServices/shopApi";
import { useAppSelector } from "../../hooks/redux";
import { selectCartItems } from "../../redux/cart/cartSlice";

import BasicModal from "../basic-modal/BasicModal";
import CustomButton from "../custom-button/CustomButton";
import { StyledTextField } from "./styles";

type FormInputTypes = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

const OrderForm = () => {
  const [addUserOrder, { isError, isLoading, isSuccess }] =
    useAddUserOrderMutation();
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

  const cartItems = useAppSelector(selectCartItems);
  const formData = getValues();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await addUserOrder({ cartItems, formData });
    reset();
  };

  useEffect(() => {
    if (!isSuccess) return;
    reset();
  }, [isSuccess]);

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h3" gutterBottom>
          Оформить заказ
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
                  label="Ваше имя"
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
                  label="Ваша фамилия"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName?.message : ""}
                  margin="normal"
                  required
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
                label="Ваш номер телефона"
                error={!!errors.phoneNumber}
                helperText={
                  errors.phoneNumber ? errors.phoneNumber?.message : ""
                }
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
                label="Электронная почта"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ""}
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
            )}
          />
          <CustomButton
            type="submit"
            sx={{
              width: "50%",
              display: "flex",
              marginLeft: "auto",
            }}
          >
            Заказать
          </CustomButton>
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
