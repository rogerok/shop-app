import React from "react";
import {
  AccordionSummary,
  Typography,
  Divider,
  Paper,
  AccordionDetails,
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionProps = MuiAccordionProps & {
  title: string;
};

const Accordion: React.FC<AccordionProps> = ({ children, title }) => (
  <MuiAccordion defaultExpanded elevation={3}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ pl: 4 }}>
      <Typography variant="h4" mb={4}>
        {title}
      </Typography>
    </AccordionSummary>
    <Divider />
    <Paper elevation={3} sx={{ p: 3 }}>
      <AccordionDetails>{children}</AccordionDetails>
    </Paper>
  </MuiAccordion>
);

export default Accordion;
