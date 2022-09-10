import React from "react";
import { Container, Typography, Grid } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../utils/validations/validationSchema";

import { CountryType, RegisterDataType } from "../../ts/types";
import { RadioOptionsType } from "../../ts/ComponentsTypes";

import {
  useLoginMutation,
  useRegisterUserMutation,
} from "../../services/authApi";

import TextInput from "../common/inputs/TextInput";
import RadioGroup from "../common/RadioGroup/RadioGroup";
import Button from "../common/Button/Button";
// import DatePicker from "../common/DatePicker/DatePicker";
import Autocomplete from "../common/Autocomplete/Autocomplete";
import RequestStatus from "../common/RequestStatus/RequestStatus";
import { COUNTRIES_LIST } from "../../utils/constants/COUNTRIES_LIST";

const DatePicker = React.lazy(() => import("../common/DatePicker/DatePicker"));

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
  const { control, reset, handleSubmit } = useForm<RegisterDataType>({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const [registerUser, { isError, isLoading, isSuccess }] =
    useRegisterUserMutation();

  const handleReset = () => reset();

  const onSubmit = (data: RegisterDataType) => {
    registerUser(data);
    handleReset();
  };
  if (isLoading || isSuccess || isError)
    return (
      <RequestStatus
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        succesMessage="You will be redirected to main page"
        navigateTo="/"
      />
    );
  return (
    <Container maxWidth="xl" component="section">
      <Typography variant="h2" align="center">
        Register
      </Typography>
      <Grid container mb={10} display="flex" justifyContent="center">
        <Grid
          container
          item
          xs={8}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
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
          <Grid item xs={12}>
            <RadioGroup
              control={control}
              name="gender"
              label="Gender"
              options={genderOptions}
              row
            />
          </Grid>
          <Grid item mb={2} xs={6}>
            <DatePicker control={control} name="bornDate" label="Born date" />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete<CountryType>
              control={control}
              name="country"
              label="Country"
              options={COUNTRIES_LIST}
            />
          </Grid>
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
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;
