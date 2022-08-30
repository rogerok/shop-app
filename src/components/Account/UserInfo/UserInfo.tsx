import React from "react";
import { Paper, Grid, Avatar, Typography, Container } from "@mui/material";

import { UserData } from "../../../ts/UserData";

import Link from "../../common/Link/Link";
import { useAppDispatch } from "../../../hooks/redux";
import { logout } from "../../../redux/user/userSlice";
import Button from "../../common/Button/Button";

type UserInfoProps = {
  data: Pick<
    UserData,
    "firstName" | "lastName" | "age" | "birthDate" | "email" | "phone" | "image"
  >;
};

const UserInfo: React.FC<UserInfoProps> = ({ data }) => {
  const { firstName, lastName, birthDate, age, email, phone, image } = data;
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <Paper>
      <Grid container display="flex" flexDirection="column" p={2}>
        <Grid item xs={12} display="flex" flexWrap="wrap" mb={2}>
          <Avatar
            src={image}
            alt="user photo"
            sx={{ width: 120, height: 120 }}
          />
          <Typography
            variant="h5"
            component="span"
            fontWeight={600}
            alignSelf="flex-end"
          >
            {firstName}&#160;
          </Typography>
          <Typography
            variant="h5"
            component="span"
            fontWeight={600}
            alignSelf="flex-end"
          >
            {lastName}
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" mb={2}>
          <Typography variant="body1" fontWeight={600}>
            Phone number:&#160;
          </Typography>
          <Typography variant="body1">{phone}</Typography>
        </Grid>
        <Grid item xs={12} display="flex" mb={2}>
          <Typography variant="body1" fontWeight={600}>
            Email:&#160;
          </Typography>
          <Typography variant="body1">{phone}</Typography>
        </Grid>
        <Grid item xs={6} ml="auto" mb={2}>
          <Button onClick={handleLogout}>Logout</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserInfo;
