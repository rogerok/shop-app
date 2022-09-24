import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  isSidebarOpen: boolean;
  isSnackbarOpen: boolean;
  snackbarMessage: string;
};

const initialState: UiState = {
  isSidebarOpen: false,
  isSnackbarOpen: false,
  snackbarMessage: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarOpen(state: UiState, action: PayloadAction<boolean>) {
      state.isSidebarOpen = action.payload;
    },
    setSnackbarOpen(state: UiState, action: PayloadAction<string>) {
      state.isSnackbarOpen = true;
      state.snackbarMessage = action.payload;
    },
    setSnackbarClose(state: UiState, action: PayloadAction) {
      state.isSnackbarOpen = false;
      state.snackbarMessage = "";
    },
  },
});

export const { setSidebarOpen, setSnackbarOpen, setSnackbarClose } =
  uiSlice.actions;

export const selectUiState = ({ ui }: { ui: UiState }) => ui;
export const selectIsSidebarOpen = ({ ui }: { ui: UiState }) =>
  ui.isSidebarOpen;

export default uiSlice.reducer;
