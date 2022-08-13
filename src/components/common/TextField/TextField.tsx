import React from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { Controller, FieldErrors } from "react-hook-form";
import { FormDataType, FormInputType } from "../../../ts/types";
import { StyledTextField } from "./TextField.styles";

type TextFieldProps = {} & MuiTextFieldProps & FormInputType;

const TextField: React.FC<TextFieldProps> = ({
  type,
  label,
  /*   error, */
  helperText,
  required,
  name,
  control,
  ...props
}) => (
  <>
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <StyledTextField
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
    {/*     <StyledTextField
      type={type}
      label={label}
      error={error}
      helperText={helperText}
      required
      {...props}
    /> */}
  </>
);

export default TextField;
