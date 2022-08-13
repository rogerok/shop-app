import React from "react";
import { Container, Typography, Grid } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../utils/validations/validationSchema";

import { RadioOptionsType, RegisterFormDataType } from "../../ts/types";

import TextField from "../common/TextField/TextField";
import RadioGroup from "./RadioGroup/RadioGroup";
import Button from "../common/Button/Button";

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

  return (
    <Container
      maxWidth="xl"
      sx={{ border: "2px solid black" }}
      component="section"
    >
      <Grid
        container
        sx={{ border: "2px solid red" }}
        mb={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h2">Registration</Typography>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={4}
              display="flex"
              justifyContent="space-between"
            >
              <Grid item xs={6}>
                <TextField
                  control={control}
                  name="firstName"
                  type="text"
                  label="Your first name"
                  required
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  control={control}
                  name="lastName"
                  type="text"
                  label="Your last name"
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
              label="Enter your gender"
              options={genderOptions}
              row
            />

            <TextField
              control={control}
              name="password"
              type="password"
              label="Enter your password"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              control={control}
              name="phoneNumber"
              type="tel"
              label="Your phone number"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextField
              control={control}
              name="email"
              type="email"
              label="Your email"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;

/* <form onSubmit={handleSubmit}>
  <Grid container spacing={4} display="flex" justifyContent="space-between">
    <Grid item xs={6}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="Your first name"
            required
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
            margin="normal"
            fullWidth
            variant="outlined"
          />
        )}
      />
    </Grid>
    <Grid item xs={6}>
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="Your last name"
            required
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
            margin="normal"
            fullWidth
            variant="outlined"
          />
        )}
      />
    </Grid>
  </Grid>
  <RadioGroup
    control={control}
    name="gender"
    label="Enter your gender"
    options={genderOptions}
    row
  />
  <Controller
    name="password"
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        type="tel"
        label="Your phone number"
        required
        error={!!errors.phoneNumber}
        helperText={errors?.phoneNumber?.message}
        margin="normal"
        fullWidth
        variant="outlined"
      />
    )}
  />
  <Controller
    name="phoneNumber"
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        type="tel"
        label="Your phone number"
        required
        error={!!errors.phoneNumber}
        helperText={errors?.phoneNumber?.message}
        margin="normal"
        fullWidth
        variant="outlined"
      />
    )}
  />
  <Controller
    name="email"
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        type="email"
        label="Your email"
        required
        error={!!errors.email}
        helperText={errors?.phoneNumber?.message}
        fullWidth
        margin="normal"
        variant="outlined"
      />
    )}
  />
  <Button type="submit">Submit</Button>
</form>;
 */
