import React from "react";
import { Typography } from "@mui/material";

type PersonalDataProps = {
  title: string;
  content: string;
};

const PersonalDataItem: React.FC<PersonalDataProps> = ({ title, content }) => (
  <>
    <Typography variant="body1" fontWeight={600}>
      {title}: &#160;
    </Typography>
    <Typography variant="body1">{content}</Typography>
  </>
);

export default React.memo(PersonalDataItem);
