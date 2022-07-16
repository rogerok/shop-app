import React from "react";

import { Modal as MuiModal } from "@mui/material";

import { StyledContainer } from "./Modal.styles";
import { StatusType } from "../../../ts/types";
import useModal from "../../../hooks/useModal";

type ModalProps = StatusType;

const Modal: React.FC<ModalProps> = ({ isLoading, isSuccess, isError }) => {
  const { handleClose, open, content } = useModal({
    isLoading,
    isSuccess,
    isError,
  });

  return (
    <MuiModal open={open} onClose={handleClose}>
      <StyledContainer>{content}</StyledContainer>
    </MuiModal>
  );
};

export default Modal;
