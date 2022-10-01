import {
  createSlice,
  PayloadAction,
  current,
  createSelector,
} from "@reduxjs/toolkit";
import { ProductType, CartProductType } from "../../ts/ProductsTypes";

type CartState = {
  cartItems: CartProductType[];
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
      reducer(state: CartState, action: PayloadAction<CartProductType>) {
        const productIndex = state.cartItems.findIndex(
          (product) => product.id === action.payload.id
        );
        if (productIndex >= 0) {
          state.cartItems[productIndex].quantity += 1;
        } else {
          state.cartItems.push(action.payload);
        }
      },
      prepare({
        id,
        brand,
        category,
        discountPercentage,
        price,
        title,
        stock,
        thumbnail,
        quantity,
      }: ProductType | CartProductType): { payload: CartProductType } {
        return {
          payload: {
            id,
            brand,
            category,
            discountPercentage,
            price,
            title,
            stock,
            thumbnail,
            quantity: quantity || 1,
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
    clearCart() {
      return initialState;
    },
  },
});

const selectCart = (state: { cart: CartState }) => state.cart;
export const selectTotalQuantity = createSelector(
  [selectCart],
  (cart) => cart.cartQuantity
);

export const selectTotalSum = createSelector(
  [selectCart],
  (cart) => cart.cartTotalSum
);
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const {
  addToCart,
  removeFromCart,
  getTotalQuantity,
  getTotalSum,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
