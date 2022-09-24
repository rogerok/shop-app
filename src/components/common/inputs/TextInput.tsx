import React from "react";
import { TextFieldProps as MuiTextFieldProps, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextInputType } from "../../../ts/ComponentsTypes";

type TextInputrops = MuiTextFieldProps & TextInputType;

const TextInput: React.FC<TextInputrops> = ({
  type,
  label,
  helperText,
  required,
  name,
  control,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <TextField
        type={type}
        label={label}
        required
        error={!!error}
        helperText={error?.message}
        {...props}
        {...field}
      />
    )}
  />
);

export default TextInput;
