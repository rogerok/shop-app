import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../ts/UserData";

type UserState = {
  userData: UserData | null;
  token: null | string;
};

const initialState = {
  userData: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state: UserState, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    setCredentials: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { logout, setUser, setCredentials } = userSlice.actions;

export const selectUserToken = ({ user }: { user: UserState }) => user.token;

export default userSlice.reducer;
