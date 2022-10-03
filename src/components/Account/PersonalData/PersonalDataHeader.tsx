import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";

import { UserDataType } from "../../../ts/UserData";

type PersonalDataHeaderProps = Pick<
  UserDataType,
  "firstName" | "lastName" | "image"
>;

const PersonalDataHeader: React.FC<PersonalDataHeaderProps> = ({
  firstName,
  lastName,
  image,
}) => (
  <Grid container alignItems="center">
    <Grid item lg={3}>
      <Avatar src={image} alt="user photo" sx={{ width: 120, height: 120 }} />
    </Grid>
    <Grid item lg={10}>
      <Typography
        variant="h5"
        component="span"
        fontWeight={600}
        alignSelf="center"
      >
        {firstName}&#160;
        {lastName}
      </Typography>
    </Grid>
  </Grid>
);

export default PersonalDataHeader;
