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

export type AddedProductType = ProductType & {
  quantity: number;
};
