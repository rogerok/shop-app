import { ReactNode } from "react";
import { LinkProps as MuiLinkProps } from "@mui/material";

export type LinkProps = {
  component?: React.ElementType;
  to: string;
  children?: ReactNode;
  onClick?: () => void;
  withBackground?: boolean;
  selected?: boolean;
} & MuiLinkProps;
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

export type TextInputType = {
  control: any;
  name: string;
  label: string;
};
