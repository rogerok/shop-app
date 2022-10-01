import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPType, FavoritesType, UserGeoType } from "../../ts/types";
import { UserDataType } from "../../ts/UserData";
import { PAGINATION_LIMIT } from "../../utils/constants/PAGINATION_LIMIT";

type UserState = {
  userData: UserDataType | null;
  token: string | null;
  ip: string | null;
  favorites: FavoritesType;
  favoritesThumbnails: string[];
  userGeo: UserGeoType | null;
};

const initialState: UserState = {
  userData: null,
  token: null,
  ip: null,
  favorites: {},
  favoritesThumbnails: [],
  userGeo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = initialState.userData;
      state.token = initialState.token;
    },
    setUser: (state: UserState, action: PayloadAction<UserDataType>) => {
      state.userData = action.payload;
    },
    setCredentials: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserIP: (state: UserState, action: PayloadAction<IPType>) => {
      state.ip = action.payload.ip;
    },
    setUserGeo: (state: UserState, action: PayloadAction<UserGeoType>) => {
      state.userGeo = action.payload;
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

export const {
  logout,
  setUser,
  setCredentials,
  setUserIP,
  setUserGeo,
  toggleFavorite,
} = userSlice.actions;

const selectUserState = ({ user }: { user: UserState }) => user;

export const selectUserToken = ({ user }: { user: UserState }) => user.token;

export const selectUserData = ({ user }: { user: UserState }) =>
  user?.userData as UserDataType;

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

export const selectFavoritesProducts = createSelector(
  [selectFavorites, (_, interval) => interval],
  (favorites, interval) => Object.keys(favorites).slice(interval)
);

export const selectFavoritesKeysByInterval = createSelector(
  [selectFavorites, (_, interval: number) => interval],
  (favorites, interval) => Object.keys(favorites).slice(0, interval)
);

export default userSlice.reducer;
