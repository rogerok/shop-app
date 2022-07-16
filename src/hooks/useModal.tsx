import React, { useEffect, useState } from "react";
import StatusError from "../components/common/StatusComponents/StatusError";
import StatusLoading from "../components/common/StatusComponents/StatusLoading";
import StatusSuccess from "../components/common/StatusComponents/StatusSuccess";
import { StatusType } from "../ts/types";

const getContent = ({ isLoading, isSuccess, isError }: StatusType) => {
  if (isLoading) return <StatusLoading />;
  if (isError) return <StatusError />;
  if (isSuccess) return <StatusSuccess />;
  return null;
};

const useModal = ({ isSuccess, isLoading, isError }: StatusType) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    if (isLoading) return;
    setOpen(false);
  };
  const content = getContent({ isLoading, isSuccess, isError });

  useEffect(() => {
    setOpen(Boolean(content));

    const timer = setTimeout(() => {
      if (isSuccess) handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading, isSuccess, isError]);

  return {
    handleClose,
    open,
    content,
  };
};

export default useModal;
