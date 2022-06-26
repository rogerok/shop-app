import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/types";
// eslint-disable-next-line import/no-cycle
import { RootState } from "../rootReducer";

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
    addToCart: {
      reducer(state: CartState, action: PayloadAction<Product>) {
        const productIndex = state.cartItems.findIndex(
          (product) => product.id === action.payload.id
        );
        if (productIndex >= 0) {
          state.cartItems[productIndex].quantity += 1;
        } else {
          state.cartItems.push(action.payload);
        }
      },
      prepare(product: Product): { payload: Product } {
        return {
          payload: {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
          },
        };
      },
    },
    removeFromCart({ cartItems }: CartState, action: PayloadAction<string>) {
      const productIndex = current(cartItems).findIndex(
        (product) => product.id === action.payload
      );
      if (productIndex === -1) return;

      if (cartItems[productIndex].quantity === 1) {
        cartItems.splice(productIndex, 1);
      } else {
        cartItems[productIndex].quantity -= 1;
      }
    },
    getTotalQuantity(state: CartState, action: PayloadAction) {
      const totalQuantity = current(state).cartItems.reduce(
        (total, product) => Number(product.quantity) + total,
        0
      );
      state.cartQuantity = totalQuantity;
    },
    getTotalSum(state: CartState, action: PayloadAction) {
      const totalSum = state.cartItems.reduce(
        (total, product) =>
          Number(product.price) * Number(product.quantity) + total,
        0
      );
      state.cartTotalSum = totalSum;
    },
  },
});

export const selectCartItems = (state: RootState): Product[] =>
  state.cart.cartItems;
export const selectTotalSum = (state: RootState) => state.cart.cartTotalSum;
export const selectTotalQuantity = (state: RootState) =>
  state.cart.cartQuantity;
export const { addToCart, removeFromCart, getTotalQuantity, getTotalSum } =
  cartSlice.actions;

export default cartSlice.reducer;
