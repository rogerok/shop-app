import React from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserData } from "../../../../ts/UserData";
import { useLogoutMutation } from "../../../../services/authApi";

import Button from "../../../common/Button/Button";
import RequestStatus from "../../../common/RequestStatus/RequestStatus";
import Link from "../../../common/Link/Link";
import { Overlay, StyledPaper } from "../../Account.styles";
import { RoutesNames } from "../../../../router/routes";

type UserProps = {
  data: Pick<UserData, "firstName" | "lastName" | "email" | "phone" | "image">;
};

const User: React.FC<UserProps> = ({ data }) => {
  const { firstName, lastName, email, phone, image } = data;
  const [logout, { isLoading, isError, isSuccess }] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

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
      <Overlay>
        <Link to={`/${RoutesNames.ACCOUNT_DETAILS}`}>
          Go to profile &#160;
          <AccountCircleIcon />
        </Link>
      </Overlay>
      <Grid container display="flex" flexDirection="column" px={2}>
        <Grid item xs={12} display="flex" flexWrap="wrap">
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
          <Button onClick={handleLogout}>
            Logout &#160; <LogoutIcon />
          </Button>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default User;
