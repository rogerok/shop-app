import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPType } from "../../ts/types";
import { UserData } from "../../ts/UserData";

type UserState = {
  userData: UserData | null;
  token: string | null;
  ip: string | null;
};

const initialState = {
  userData: null,
  token: null,
  ip: null,
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
    setUserIP: (state: UserState, action: PayloadAction<IPType>) => {
      state.ip = action.payload.ip;
    },
  },
});

export const { logout, setUser, setCredentials, setUserIP } = userSlice.actions;

const selectUserState = ({ user }: { user: UserState }) => user;
export const selectUserToken = ({ user }: { user: UserState }) => user.token;
export const selectUserData = ({ user }: { user: UserState }) =>
  user?.userData as UserData;
export const selectUserIP = ({ user }: { user: UserState }) => user?.ip;

export default userSlice.reducer;
