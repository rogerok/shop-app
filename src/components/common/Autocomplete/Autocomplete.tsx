import React from "react";
import { Controller } from "react-hook-form";
import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import { TextInputType } from "../../../ts/ComponentsTypes";

type Base = {
  label: string;
};

type AutocompleteProps<TOption> = {
  options: TOption[];
} & TextInputType;

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
