import React from "react";

import { Modal as MuiModal } from "@mui/material";

import { StyledContainer } from "./RequestStatus.styles";
import { StatusType } from "../../../ts/types";
import useRequestStatus from "../../../hooks/useRequestStatus";

type ModalProps = StatusType;

const RequestStatus: React.FC<ModalProps> = ({
  isLoading,
  isSuccess,
  isError,
}) => {
  const { handleClose, open, content } = useRequestStatus({
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

export default RequestStatus;
