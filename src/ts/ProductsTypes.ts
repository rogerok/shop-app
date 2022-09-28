export interface ProductType {
  id: string | string;
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

export type OrderedProductType = Pick<
  ProductType,
  "id" | "title" | "price" | "quantity" | "discountPercentage"
> & {
  discountedPrice: number;
};

export type OrderType = {
  id: number | string;
  products: OrderedProductType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type CartProductsType = CartProductType[];
export type ProductsType = ProductType[];
