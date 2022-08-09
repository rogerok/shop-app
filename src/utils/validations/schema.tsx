import * as yup from "yup";

export const orderSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name shouldn't contain numbers")
    .required("Please enter your name"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name shouldn't contain numbers")
    .required("Please enter your last name"),
  email: yup
    .string()
    .email("Email is incorrect")
    .required("Please enter your email"),
  phoneNumber: yup.string().required("Please enter your phone number"),
});
