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
  TextInputType,
  RadioOptionsType,
  RadioOptionType,
} from "../../../ts/ComponentsTypes";
import Radio from "../Radio/Radio";

type RadioGroupProps = {
  options: RadioOptionsType;
} & MuiRadioGroupProps &
  TextInputType;

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
              key={item.value}
            />
          ))}
        </MuiRadioGroup>
      )}
    />
  </FormControl>
);

export default RadioGroup;
