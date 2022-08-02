import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoriteState = {
  favorites: string[];
};

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state: FavoriteState, action: PayloadAction<string>) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (favourite) => favourite !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
