import React from "react";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormInputType } from "../../../ts/types";

const DatePicker: React.FC<FormInputType> = ({ name, label, control }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <MuiDatePicker
          inputFormat="DD/MM/YYYY"
          onChange={onChange}
          value={value || null}
          disableFuture
          label={label}
          renderInput={(params) => (
            <TextField fullWidth name={name} variant="outlined" {...params} />
          )}
        />
      )}
    />
  </LocalizationProvider>
);

export default DatePicker;
