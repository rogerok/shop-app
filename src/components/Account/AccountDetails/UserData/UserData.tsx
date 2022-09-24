import React from "react";
import { Paper, Grid, Stack } from "@mui/material";
import { UserDataType } from "../../../../ts/UserData";
import PersonalDataHeader from "../../PersonalData/PersonalDataHeader";
import PersonalDataItem from "../../PersonalData/PersonalDataItem";

type UserDataProps = {
  personalData: {
    title: string;
    content: string;
  }[];
} & Pick<UserDataType, "firstName" | "lastName" | "email" | "image">;

const UserData: React.FC<UserDataProps> = ({
  firstName,
  lastName,
  image,
  personalData,
}) => (
  <Paper elevation={5} sx={{ px: 4, py: 2 }}>
    <Grid container component="section">
      <Grid item xs={12} display="flex" alignItems="center" mb={4}>
        <PersonalDataHeader
          firstName={firstName}
          lastName={lastName}
          image={image}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="space-between" px={2}>
        {personalData.map(({ title, content }) => (
          <Stack>
            <PersonalDataItem key={title} title={title} content={content} />
          </Stack>
        ))}
      </Grid>
    </Grid>
  </Paper>
);

export default UserData;
