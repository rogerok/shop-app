import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

export const StyledAppBar = styled(AppBar)`
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

export const StyledTextField = styled(TextField)`
  border-radius: 25px;
  & .MuiOutlinedInput-root {
    border-radius: 25px;
  }
  & .Mui-focused {
    background-color: white;
    border: none;
    color: black;
  }
`;
