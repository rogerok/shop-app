import { Typography } from "@mui/material";
import React from "react";

type PersonalDataProps = {
  title: string;
  content: string;
};

const PersonalData: React.FC<PersonalDataProps> = ({ title, content }) => (
  <>
    <Typography variant="body1" fontWeight={600}>
      {title}: &#160;
    </Typography>
    <Typography variant="body1">{content}</Typography>
  </>
);

export default React.memo(PersonalData);
