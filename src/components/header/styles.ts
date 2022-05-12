import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";

export const StyledAppBar = styled(AppBar)`
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(203, 17, 171) 0px,
    rgb(72, 17, 115) 100%
  );
  padding: 1.5rem;
`;

export const StyledIconButton = styled(IconButton)`
  border: 1px solid white;
  border-radius: 10%;
  margin-right: 1rem;
  font-size: 3rem;
`;
