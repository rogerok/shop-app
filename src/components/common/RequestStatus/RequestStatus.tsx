import React from "react";

import { Modal as MuiModal } from "@mui/material";

import { StyledContainer } from "./RequestStatus.styles";
import { StatusType } from "../../../ts/types";
import useRequestStatus from "../../../hooks/useRequestStatus";

type ModalProps = {
  navigateTo?: string;
  succesMessage?: string;
  errorMessage?: string;
} & StatusType;

const RequestStatus: React.FC<ModalProps> = ({
  isLoading,
  isSuccess,
  isError,
  succesMessage,
  errorMessage,
  navigateTo,
}) => {
  const { handleClose, open, content } = useRequestStatus({
    isLoading,
    isSuccess,
    isError,
    succesMessage,
    errorMessage,
    navigateTo,
  });

  return (
    <MuiModal open={open} onClose={handleClose}>
      <StyledContainer>{content}</StyledContainer>
    </MuiModal>
  );
};

export default RequestStatus;
