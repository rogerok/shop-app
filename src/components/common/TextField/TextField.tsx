import React from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { FieldErrors } from "react-hook-form";
import { FormDataType } from "../../../ts/types";
import { StyledTextField } from "./TextField.styles";

type TextFieldProps = {
  type: string;
  label: string;
  error: FieldErrors<FormDataType>;
  helperText: React.ReactNode;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & MuiTextFieldProps;

const TextField: React.FC<TextFieldProps> = ({
  type,
  label,
  error,
  helperText,
  required,
  ...props
}) => (
  <StyledTextField
    type={type}
    label={label}
    error={error}
    helperText={helperText}
    required
    {...props}
  />
);

export default TextField;
