import React from "react";
import { Link, Box } from "@mui/material";
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
        name="Telegram"
        icon={<TelegramIcon />}
        component={Link}
      />
    </Box>
    <Box component="p" mr={4}>
      <IconLink
        href="https://github.com/rogerok"
        target="_blank"
        name="GitHub"
        icon={<GitHubIcon />}
        component={Link}
      />
    </Box>
  </StyledFooter>
);

export default Footer;
