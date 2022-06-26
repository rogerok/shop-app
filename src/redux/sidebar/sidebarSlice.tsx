import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SidebarState = {
  isOpen: boolean;
};

const initialState: SidebarState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOpen(state: SidebarState, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { setSidebarOpen } = sidebarSlice.actions;
export const selectIsSideBarOpen = ({ sidebar }: { sidebar: SidebarState }) =>
  sidebar.isOpen;

export default sidebarSlice.reducer;
