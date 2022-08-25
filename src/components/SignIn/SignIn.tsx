import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validations/validationSchema";

import { useLoginMutation } from "../../services/authApi";

import RequestStatus from "../common/RequestStatus/RequestStatus";
import TextInput from "../common/TextInput/TextInput";
import Button from "../common/Button/Button";
import { LoginDataType } from "../../ts/types";

const defaultValues = {
  name: "",
  password: "",
};

const SignIn = () => {
  const { control, getValues, reset, handleSubmit } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const [login, { isError, isLoading, isSuccess }] = useLoginMutation();

  const onSubmit = (data: LoginDataType) => {
    login(data);
  };

  useEffect(() => {
    if (!isSuccess) return;
    reset();
  }, [isSuccess]);

  if (isLoading || isSuccess || isError)
    return (
      <RequestStatus
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
      />
    );
  /* isLoading || isSuccess || isError ? (
    <RequestStatus
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
    />
  ) :  */
  return (
    <Container maxWidth="xl" component="section">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">Sign in</Typography>
        <Grid
          container
          display="flex"
          justifyContent="center"
          p={2}
          spacing={2}
        >
          <Grid item xs={6} component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              control={control}
              name="name"
              type="text"
              label="Your name"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <TextInput
              control={control}
              name="password"
              type="password"
              label="Your password"
              required
              margin="normal"
              fullWidth
              variant="outlined"
            />
            <Button type="submit" fullWidth>
              Sign in
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant="body1" component="p" gutterBottom mt={2}>
              Don&apos;t have account?&#160;
              <MuiLink component={RouterLink} to="/register" color="secondary">
                Create
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignIn;
