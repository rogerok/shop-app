import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";
import { To } from "react-router-dom";

export interface ProductType {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: any;
}

export type CartProductType = Omit<
  ProductType,
  "images" | "rating" | "description"
>;
export type CartProductsType = CartProductType[];
export type ProductsType = ProductType[];

export type LinkProps = {
  component?: React.ElementType;
  to?: To;
  children?: ReactNode;
  onClick?: () => void;
};

export type ImgProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  width?: string;
};

export type StatusType = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

export type AddedProductType = ProductType & {
  quantity: number;
};

export type FormDataType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type RegisterFormDataType = {
  password: string;
  confirmPassword: string;
  bornDate: string;
  country: string;
  gender: string;
} & FormDataType;

export type RadioOptionType = {
  label: string;
  value: string;
};

export type RadioOptionsType = RadioOptionType[];

export type FormInputType = {
  control?: any;
  name: string;
  label: string;
};
