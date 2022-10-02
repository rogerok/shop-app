import React from "react";
import { Link, Box, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconLink from "../common/IconLink/IconLink";

import { StyledFooter } from "./Footer.styles";

const Footer = () => (
  <StyledFooter component="footer" display="flex" justifyContent="center">
    <Box component="p" mr={4}>
      <IconLink
        href="https://t.me/slaavikkk"
        target="_blank"
        icon={<TelegramIcon />}
        component={Link}
      >
        <Typography variant="body1" component="span" fontWeight={300}>
          Telegram
        </Typography>
      </IconLink>
    </Box>
    <Box component="p" mr={4}>
      <IconLink
        href="https://github.com/rogerok"
        target="_blank"
        icon={<GitHubIcon />}
        component={Link}
      >
        <Typography variant="body1" component="span" fontWeight={300}>
          GitHub
        </Typography>
      </IconLink>
    </Box>
  </StyledFooter>
);

export default Footer;
