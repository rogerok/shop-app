import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../utils/validations/validationSchema";

import { RadioOptionsType, RegisterFormDataType } from "../../ts/types";

import TextInput from "../common/TextInput/TextInput";
import RadioGroup from "../common/RadioGroup/RadioGroup";
import Button from "../common/Button/Button";
import DatePicker from "../common/DatePicker/DatePicker";
import Autocomplete from "../common/Autocomplete/Autocomplete";
import { COUNTRIES_LIST } from "../../utils/constants/COUNTRIES_LIST";

const genderOptions: RadioOptionsType = [
  {
    value: "female",
    label: "Female",
  },
  {
    value: "male",
    label: "Male",
  },
];

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  bornDate: "",
  country: "",
  gender: "",
};

const Register = () => {
  const { control, getValues, reset } = useForm<RegisterFormDataType>({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(getValues());
  };

  const handleReset = () => reset();

  return (
    <Container maxWidth="xl" component="section">
      <Grid
        container
        mb={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h2">Registration</Typography>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit} noValidate>
            <Grid
              container
              spacing={4}
              display="flex"
              justifyContent="space-between"
              mb={2}
            >
              <Grid item xs={6}>
                <TextInput
                  control={control}
                  name="firstName"
                  type="text"
                  label="First name"
                  required
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextInput
                  control={control}
                  name="lastName"
                  type="text"
                  label="Last name"
                  required
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <RadioGroup
              control={control}
              name="gender"
              label="Gender"
              options={genderOptions}
              row
            />
            <Box component="p">
              <DatePicker control={control} name="bornDate" label="Born date" />
            </Box>
            <Autocomplete
              control={control}
              name="country"
              label="Country"
              options={COUNTRIES_LIST}
            />
            <TextInput
              control={control}
              name="password"
              type="password"
              label="Password"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextInput
              control={control}
              name="confirmPassword"
              type="password"
              label="Confirm password"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextInput
              control={control}
              name="phoneNumber"
              type="tel"
              label="Your phone number"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextInput
              control={control}
              name="email"
              type="email"
              label="Your email"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Grid
              container
              mt={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={4}>
                <Button onClick={handleReset} fullWidth>
                  clear
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button type="submit" fullWidth>
                  submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;
