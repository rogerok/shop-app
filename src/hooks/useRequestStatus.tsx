import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusError from "../components/common/StatusComponents/StatusError";
import Spinner from "../components/common/Spinner/Spinner";
import StatusSuccess from "../components/common/StatusComponents/StatusSuccess";
import { StatusType } from "../ts/types";

const getContent = ({
  isLoading,
  isSuccess,
  isError,
  succesMessage,
  errorMessage,
}: RequestStatusType) => {
  if (isLoading) return <Spinner />;
  if (isError) return <StatusError message={errorMessage} />;
  if (isSuccess) return <StatusSuccess message={succesMessage} />;
  return null;
};

type RequestStatusType = {
  navigateTo?: string;
  succesMessage?: string;
  errorMessage?: string;
} & StatusType;

const useRequestStatus = ({
  isSuccess,
  isLoading,
  isError,
  succesMessage,
  errorMessage,
  navigateTo,
}: RequestStatusType) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    if (isLoading) return;
    setOpen(false);
  };
  const content = getContent({
    isLoading,
    isSuccess,
    isError,
    succesMessage,
    errorMessage,
  });

  useEffect(() => {
    setOpen(Boolean(content));

    const timer = setTimeout(() => {
      if (isSuccess) handleClose();
      if (navigateTo && isSuccess) navigate(navigateTo);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading, isSuccess, isError]);

  return {
    handleClose,
    open,
    content,
  };
};

export default useRequestStatus;
