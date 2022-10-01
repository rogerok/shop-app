import React, { useEffect, useState } from "react";
import { NavigateOptions, To, useNavigate } from "react-router-dom";
import { StatusType } from "../ts/ComponentsTypes";

import StatusComponent from "../components/common/StatusComponent/StatucComponent";
import Spinner from "../components/common/Spinner/Spinner";

const getContent = ({
  isLoading,
  isSuccess,
  isError,
  succesMessage,
  errorMessage,
}: RequestStatusType) => {
  if (isLoading) return <Spinner />;
  return (
    <StatusComponent
      isError={isError}
      isSucces={isSuccess}
      errorMessage={errorMessage}
      succesMessage={succesMessage}
    />
  );
};

type RequestStatusType = {
  navigateTo?: To;
  navigateOptions?: NavigateOptions;
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
  navigateOptions,
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
      if (navigateTo && isSuccess)
        navigate(navigateTo, navigateOptions ?? undefined);
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
