import React from "react";

import { Modal } from "@mui/material";

import { StyledContainer } from "./styles";
import { StatusType } from "../../interfaces/types";
import useModal from "../../hooks/useModal";

type ModalProps = StatusType;

const BasicModal: React.FC<ModalProps> = ({
  isLoading,
  isSuccess,
  isError,
}) => {
  const { handleClose, open, content } = useModal({
    isLoading,
    isSuccess,
    isError,
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <StyledContainer>{content}</StyledContainer>
    </Modal>
  );
};

export default BasicModal;
