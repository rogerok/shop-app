import React from "react";
import {
  FormLabel,
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  FormControl,
} from "@mui/material";
import { Controller } from "react-hook-form";
import Radio from "../Radio/Radio";
import {
  FormInputType,
  RadioOptionsType,
  RadioOptionType,
} from "../../../ts/types";

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
    <FormLabel component="legend" sx={{ color: "primary.dark" }}>
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
