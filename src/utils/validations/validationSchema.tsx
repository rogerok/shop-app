import { SchemaOf, object, string, ref, date } from "yup";
import { FormDataType, RegisterFormDataType } from "../../ts/types";

export const validationSchema: SchemaOf<FormDataType | RegisterFormDataType> =
  object().shape({
    firstName: string()
      .matches(/^([^0-9]*)$/, "First name shouldn't contain numbers")
      .required("Please enter your name"),
    lastName: string()
      .matches(/^([^0-9]*)$/, "Last name shouldn't contain numbers")
      .required("Please enter your last name"),
    email: string()
      .email("Email is incorrect")
      .required("Please enter your email"),
    phoneNumber: string()
      .matches(/^([^a-zA-Z]*)$/, "Phone number shouldn't contain letters")
      .required("Please enter your phone number"),
    password: string()
      .required("Password is required")
      .min(8, "Password is less then 8 chars"),
    confirmPassword: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
  });
