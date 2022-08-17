import React from "react";
import {
  FormLabel,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  FormControl,
} from "@mui/material";
import { Controller } from "react-hook-form";
import {
  FormInputType,
  RadioOptionsType,
  RadioOptionType,
} from "../../../ts/types";
import Radio from "../Radio/Radio";

type RadioGroupProps = {
  options: RadioOptionsType;
} & MuiRadioGroupProps &
  FormInputType;

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  control,
  name,
  label,
  ...props
}) => (
  <FormControl component="fieldset">
    <FormLabel component="legend" sx={{ color: "primary.dark", mb: 1 }}>
      {label}
    </FormLabel>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiRadioGroup {...field} {...props}>
          {options.map((item: RadioOptionType) => (
            <FormControlLabel
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
        </MuiRadioGroup>
      )}
    />
  </FormControl>
);

export default RadioGroup;
