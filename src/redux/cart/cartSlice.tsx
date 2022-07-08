import {
  createSlice,
  PayloadAction,
  current,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Product, CartProduct } from "../../interfaces/types";
import { shopApi } from "../../services/shopServices/shopApi";

type CartState = {
  cartItems: CartProduct[];
  cartTotalSum: number;
  cartQuantity: number;
};

/* const isCartProduct = (product: CartProduct | Product): product is CartProduct => {
  return 
}
 */
/* const cartAdapter = createEntityAdapter<Product>({
  sortComparer: (a, b) => Number(a.price) - Number(b.price),
}); */

/* const initialState: CartState = cartAdapter.getInitialState({
  cartItems: [],
  cartTotalSum: 0,
  cartQuantity: 0,
});
 */

/* const extendedShopApi = shopApi.injectEndpoints({
  endpoints: (builder) => ({
    addUserOrder: builder.mutation({
      query: (orderData) => ({
        url: `${SHOP_API.USERS}/add`,
        method: "POST",
        body: {orderData, initialState.},
      }),
    }),
  }),
}); */

const isCartProduct = (
  product: CartProduct | Product
): product is CartProduct => typeof product.quantity !== undefined;

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
      reducer(state: CartState, action: PayloadAction<CartProduct>) {
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
      }: Product | CartProduct): { payload: CartProduct } {
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

export const selectCartItems = (state: { cart: CartState }): CartProduct[] =>
  state.cart.cartItems;

export const selectTotalSum = createSelector(
  [selectCart],
  (cart) => cart.cartTotalSum
);

export const {
  addToCart,
  removeFromCart,
  getTotalQuantity,
  getTotalSum,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
