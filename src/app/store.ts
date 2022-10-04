import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import storeReducer from "../features/store/storeSlice";

export const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
