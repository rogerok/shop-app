import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPType, FavoritesType } from "../../ts/types";
import { UserData } from "../../ts/UserData";
import { PAGINATION_LIMIT } from "../../utils/constants/PAGINATION_LIMIT";

type IntervalType = {
  from: number;
  to: number;
};

type UserState = {
  userData: UserData | null;
  token: string | null;
  ip: string | null;
  favorites: FavoritesType;
  favoritesThumbnails: string[];
};

const initialState: UserState = {
  userData: null,
  token: null,
  ip: null,
  favorites: {},
  favoritesThumbnails: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = initialState.userData;
      state.token = initialState.token;
    },
    setUser: (state: UserState, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    setCredentials: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserIP: (state: UserState, action: PayloadAction<IPType>) => {
      state.ip = action.payload.ip;
    },
    toggleFavorite(
      state: UserState,
      action: PayloadAction<{ id: string; thumbnail: string }>
    ) {
      const { favorites, favoritesThumbnails } = state;
      const { id, thumbnail } = action.payload;

      if (id in favorites === false || !favorites[id]) {
        state.favorites[id] = thumbnail;
      } else {
        delete favorites[id];
      }
    },
  },
});

export const { logout, setUser, setCredentials, setUserIP, toggleFavorite } =
  userSlice.actions;

const selectUserState = ({ user }: { user: UserState }) => user;

export const selectUserToken = ({ user }: { user: UserState }) => user.token;

export const selectUserData = ({ user }: { user: UserState }) =>
  user?.userData as UserData;

export const selectUserIP = ({ user }: { user: UserState }) => user?.ip;

export const selectFavorites = createSelector(
  [selectUserState],
  (userState) => userState.favorites
);

export const selectFavoritesThumbnails = createSelector(
  [selectUserState],
  (userState) => Object.values(userState.favorites).slice(-5).reverse()
);

export const selectFavoritesKeys = ({ user }: { user: UserState }) =>
  Object.keys(user.favorites);
/* 
export const selectFavoritesProducts = createSelector(
  [selectFavorites, (state, interval: IntervalType) => interval],
  (favorites, interval) =>
    Object.keys(favorites).slice(interval.from, interval.to)
); */
export const selectFavoritesProducts = createSelector(
  [selectFavorites, (state, interval) => interval],
  (favorites, interval) => Object.keys(favorites).slice(interval)
);

export const selectFavoritesKeysByInterval = createSelector(
  [selectFavorites, (state, interval: number) => interval],
  (favorites, interval) => Object.keys(favorites).slice(0, interval)
);

export default userSlice.reducer;
