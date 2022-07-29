import React, { FC } from "react";
import { Button, IconButton, Snackbar as MuiSnackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type SnackbarProps = {
  isOpen: boolean;
  handleClose: (e?: Event | React.SyntheticEvent, reason?: string) => void;
  message: string;
};

const Snackbar: FC<SnackbarProps> = ({ isOpen, handleClose, message }) => {
  const action = (
    <>
      <Button onClick={handleClose} size="medium" color="secondary">
        CLOSE
      </Button>
      <IconButton onClick={handleClose} size="medium" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <MuiSnackbar
      open={isOpen}
      onClose={handleClose}
      message={message}
      action={action}
      autoHideDuration={3000}
    />
  );
};

export default Snackbar;
