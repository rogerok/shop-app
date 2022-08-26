export type CountryType = {
  label: string;
  code: string;
};

export type FormDataType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type RegisterDataType = {
  password: string;
  confirmPassword: string;
  bornDate: string;
  country: string;
  gender: string;
} & FormDataType;

export type LoginDataType = {
  name: string;
  password: string;
};

export type CredentialsType = {
  id: number | null;
  token: string | null;
};

/* export type UserType = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
 */
