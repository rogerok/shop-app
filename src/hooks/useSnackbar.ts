import { useState } from "react";

const useSnackbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e?: Event | React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return { isOpen, handleOpen, handleClose };
};

export default useSnackbar;
