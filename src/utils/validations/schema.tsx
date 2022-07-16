import * as Yup from "yup";

export const orderSchema = Yup.object().shape({
  firsName: Yup.string().required("Please enter your name"),
  lastName: Yup.string().required("Please enter your lastname"),
  email: Yup.string()
    .email("Email is incorrect")
    .required("Please enter your email"),
  phoneNumber: Yup.string().required("Please enter your phone number"),
});
