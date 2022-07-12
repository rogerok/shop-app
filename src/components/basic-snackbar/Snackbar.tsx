import React, { FC } from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type BasicSnackbarProps = {
  isOpen: boolean;
  handleClose: (e?: Event | React.SyntheticEvent, reason?: string) => void;
  message: string;
};

const BasicSnackbar: FC<BasicSnackbarProps> = ({
  isOpen,
  handleClose,
  message,
}) => {
  const action = (
    <>
      <Button onClick={handleClose} size="medium" color="secondary">
        ЗАКРЫТЬ{" "}
      </Button>
      <IconButton onClick={handleClose} size="medium" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      message={message}
      action={action}
      autoHideDuration={3000}
    />
  );
};

export default BasicSnackbar;
