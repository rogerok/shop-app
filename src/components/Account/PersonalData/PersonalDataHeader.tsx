import React from "react";
import { Avatar, Typography } from "@mui/material";
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
  <>
    <Avatar src={image} alt="user photo" sx={{ width: 120, height: 120 }} />
    <Typography
      variant="h5"
      component="span"
      fontWeight={600}
      alignSelf="center"
    >
      {firstName}&#160;
      {lastName}
    </Typography>
  </>
);

export default PersonalDataHeader;
