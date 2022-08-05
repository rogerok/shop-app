import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isSidebarOpen: boolean;
}

const initialState: UiState = {
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarOpen(state: UiState, action: PayloadAction<boolean>) {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSidebarOpen } = uiSlice.actions;

export const selectUiState = ({ ui }: { ui: UiState }) => ui;
export const selectIsSidebarOpen = ({ ui }: { ui: UiState }) =>
  ui.isSidebarOpen;

export default uiSlice.reducer;
