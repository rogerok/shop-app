import React from "react";
import { Controller } from "react-hook-form";
import { Autocomplete as MuiAutocomplete, TextField, Box } from "@mui/material";
import { FormInputType } from "../../../ts/types";

type Base = {
  label: string;
};

type AutocompleteProps<TOption> = {
  options: TOption[];
} & FormInputType;

const Autocomplete = <TOption extends Base>({
  options,
  control,
  label,
  name,
  ...rest
}: AutocompleteProps<TOption>) => {
  const num = 2;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiAutocomplete
          onChange={(e, data) => field.onChange(data?.label)}
          options={options}
          getOptionLabel={(option: TOption) => option.label}
          /*   value={field.value} */
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              label={label}
              variant="outlined"
            />
          )}
          {...rest}
        />
      )}
    />
  );
};

export default Autocomplete;
