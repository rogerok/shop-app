import React, { useMemo } from "react";
import { Grid, Link } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link as RouterLink } from "react-router-dom";
import { UserDataType } from "../../../../ts/UserData";
import { useLogoutMutation } from "../../../../services/authApi";
import { RoutesNames } from "../../../../router/routes";

import Button from "../../../common/Button/Button";
import PersonalDataItem from "../../PersonalData/PersonalDataItem";
import PersonalDataHeader from "../../PersonalData/PersonalDataHeader";
import RequestStatus from "../../../common/RequestStatus/RequestStatus";
import { StyledPaper } from "../../Account.styles";

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
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Grid item xs={12} display="flex" flexWrap="wrap" mb={2}>
            <PersonalDataHeader
              firstName={firstName}
              lastName={lastName}
              image={image}
            />
          </Grid>
          {personalData.map(({ title, content }) => (
            <Grid item xs={12} display="flex" mb={1}>
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
