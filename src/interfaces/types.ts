import { To } from "react-router-dom";

export type Product = {
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
};

export type CartProduct = Omit<Product, "images" | "rating" | "description">;
export type Products = Product[];

export interface AddedProduct extends Product {
  quantity: number;
}

export type LinkProps = {
  component?: React.ElementType;
  to: To;
};

export type StatusType = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};
