import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const orderSchema = Yup.object().shape({
  firsName: Yup.string().required("Пожалуйста введите ваше имя"),
  lastName: Yup.string().required("Пожалуйста введите вашу фамилию"),
  email: Yup.string()
    .email("Адрес почты введен не корректно")
    .required("Пожалуйста введите вашу почту"),
  phoneNumber: Yup.string()
    /*     .matches(phoneRegExp, "Номер телефона введен неправильно") */
    .required("Номер телефона введен неправильно"),
});
