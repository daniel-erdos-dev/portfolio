import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../configureStore";

interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsMenuOpen } = menuSlice.actions;

export const selectIsMenuOpen = (state: RootState) => state.menu.isOpen;

export default menuSlice.reducer;
