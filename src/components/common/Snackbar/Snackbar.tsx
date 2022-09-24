import React from "react";
import { Button, IconButton, Snackbar as MuiSnackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { setSnackbarClose } from "../../../redux/ui/uiSlice";

const Snackbar: React.FC = () => {
  const isSnackbarOpen = useAppSelector((state) => state.ui.isSnackbarOpen);
  const message = useAppSelector(
    (state) => state.ui.snackbarMessage
  ).toUpperCase();
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(setSnackbarClose());

  const action = (
    <>
      <Button onClick={onClose} size="medium" color="secondary">
        CLOSE
      </Button>
      <IconButton onClick={onClose} size="medium" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <MuiSnackbar
      open={isSnackbarOpen}
      onClose={onClose}
      message={message}
      action={action}
      autoHideDuration={3000}
    />
  );
};

export default Snackbar;
