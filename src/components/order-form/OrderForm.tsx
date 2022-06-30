import React from "react";

import {
  Box,
  Paper,
  TextField,
  TextFieldProps,
  Typography,
  styled,
  alpha,
} from "@mui/material";
import CustomButton from "../custom-button/CustomButton";

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.dark,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.main,
  },
}));

const OrderForm = () => {
  const orderd = "";

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h3" gutterBottom>
          Оформить заказ
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <StyledTextField
            variant="outlined"
            label="Ваше имя"
            margin="normal"
            required
            sx={{ width: "45%" }}
          />
          <StyledTextField
            variant="outlined"
            label="Ваша фамилия"
            margin="normal"
            required
            sx={{ width: "45%" }}
          />
        </Box>
        <StyledTextField
          variant="outlined"
          label="Ваш номер телефона"
          fullWidth
          margin="normal"
        />
        <StyledTextField
          variant="outlined"
          label="Электронная почта"
          margin="normal"
          fullWidth
          required
        />
        <CustomButton
          sx={{
            width: "50%",
            display: "flex",
            marginLeft: "auto",
          }}
        >
          Заказать
        </CustomButton>
      </Paper>
    </Box>
  );
};

export default OrderForm;
