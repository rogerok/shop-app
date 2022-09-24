import React, { useMemo } from "react";
import { Grid, Avatar, Typography, Link } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link as RouterLink } from "react-router-dom";

import { UserDataType } from "../../../../ts/UserData";
import { useLogoutMutation } from "../../../../services/authApi";

import Button from "../../../common/Button/Button";
import RequestStatus from "../../../common/RequestStatus/RequestStatus";
import { StyledPaper } from "../../Account.styles";
import { RoutesNames } from "../../../../router/routes";
import PersonalDataItem from "../../PersonalData/PersonalDataItem";
import PersonalDataHeader from "../../PersonalData/PersonalDataHeader";

type UserProps = {
  data: Pick<
    UserDataType,
    "firstName" | "lastName" | "email" | "phone" | "image"
  >;
};

const User: React.FC<UserProps> = ({ data }) => {
  const { firstName, lastName, email, phone, image } = data;
  const [logout, { isLoading, isError, isSuccess }] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

  const personalData = useMemo(
    () => [
      {
        title: "Email",
        content: email,
      },
      {
        title: "Phone number",
        content: phone,
      },
    ],
    [email, phone]
  );

  if (isLoading || isSuccess || isError)
    return (
      <RequestStatus
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        navigateTo="/"
      />
    );

  return (
    <StyledPaper>
      <Link
        to={`/${RoutesNames.ACCOUNT_PAGE}/${RoutesNames.ACCOUNT_DETAILS}`}
        component={RouterLink}
      >
        <Grid container display="flex" flexDirection="column" px={2}>
          <Grid item xs={12} display="flex" flexWrap="wrap">
            <PersonalDataHeader
              firstName={firstName}
              lastName={lastName}
              image={image}
            />
          </Grid>
          {personalData.map(({ title, content }) => (
            <Grid item xs={12} display="flex" mb={2}>
              <PersonalDataItem key={title} title={title} content={content} />
            </Grid>
          ))}
        </Grid>
      </Link>
      <Button onClick={handleLogout} sx={{ ml: "auto" }}>
        <LogoutIcon />
      </Button>
    </StyledPaper>
  );
};

export default User;
