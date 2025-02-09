import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./reducers/menuReducer";

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
