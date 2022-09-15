import React from "react";

import { Modal as MuiModal } from "@mui/material";

import { NavigateOptions } from "react-router-dom";
import { StyledContainer } from "./RequestStatus.styles";
import { StatusType } from "../../../ts/ComponentsTypes";
import useRequestStatus from "../../../hooks/useRequestStatus";

type ModalProps = {
  navigateTo?: string;
  navigateOptions?: NavigateOptions;
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
  navigateOptions,
}) => {
  const { handleClose, open, content } = useRequestStatus({
    isLoading,
    isSuccess,
    isError,
    succesMessage,
    errorMessage,
    navigateTo,
    navigateOptions,
  });
  return (
    <MuiModal open={open} onClose={handleClose} closeAfterTransition>
      <StyledContainer>{content}</StyledContainer>
    </MuiModal>
  );
};

export default RequestStatus;
