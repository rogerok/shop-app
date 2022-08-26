import { ReactNode } from "react";
import { To } from "react-router-dom";

export type LinkProps = {
  component?: React.ElementType;
  to?: To;
  children?: ReactNode;
  onClick?: () => void;
};
export type RadioOptionType = {
  label: string;
  value: string;
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

export type RadioOptionsType = RadioOptionType[];

export type FormInputType = {
  control: any;
  name: string;
  label: string;
};
