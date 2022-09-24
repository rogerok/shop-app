import React from "react";
import {
  Modal,
  ModalProps,
  Container,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { TextInputType } from "../../../../ts/ComponentsTypes";
import TextInput from "../../../common/inputs/TextInput";

type ChangeDataFormProps = TextInputType & ModalProps & MuiTextFieldProps;

const ChangeDataForm: React.FC<ChangeDataFormProps> = ({
  open,
  onClose,
  type,
  label,
  helperText,
  required,
  name,
  control,
  children,
  ...props
}) => {
  const num = 0;
  return (
    <Modal open={open} onClose={onClose}>
      <Container>{children}</Container>
    </Modal>
  );
};

export default ChangeDataForm;
