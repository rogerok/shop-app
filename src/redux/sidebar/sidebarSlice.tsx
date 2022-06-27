import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
  readonly categories: string[];
}

const initialState: SidebarState = {
  isOpen: false,
  categories: [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ],
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

export const selectIsSideState = ({ sidebar }: { sidebar: SidebarState }) =>
  sidebar;

export default sidebarSlice.reducer;
