import React from "react";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type PersonalDataProps = {
  title: string;
  content: string;
};

const PersonalDataItem: React.FC<PersonalDataProps> = ({ title, content }) => (
  <>
    <Typography variant="body1" fontWeight={600}>
      {title}: &#160;
    </Typography>
    <Typography variant="body1">
      {content} <EditIcon color="secondary" />
    </Typography>
  </>
);

export default React.memo(PersonalDataItem);
