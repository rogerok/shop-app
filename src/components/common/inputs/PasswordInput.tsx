import React, { useState } from "react";
import {
  TextFieldProps as MuiTextFieldProps,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { FormInputType } from "../../../ts/ComponentsTypes";

type TextInputrops = {} & MuiTextFieldProps & FormInputType;

const PasswordInput: React.FC<TextInputrops> = ({
  type,
  label,
  helperText,
  required,
  name,
  control,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          type={showPassword ? "text" : "password"}
          label={label}
          required
          error={!!error}
          helperText={error?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...props}
          {...field}
        />
      )}
    />
  );
};

export default PasswordInput;
