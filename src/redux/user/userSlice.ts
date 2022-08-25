import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../ts/types";

type UserState = {
  user: UserType | null;
};

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state: UserState, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
