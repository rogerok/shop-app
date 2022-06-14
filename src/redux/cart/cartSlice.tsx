import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/types";

type CartState = {
  cartItems: Product[];
  cartTotalSum: number;
  cartQuantity: number;
};

const initialState: CartState = {
  cartItems: [],
  cartTotalSum: 0,
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
