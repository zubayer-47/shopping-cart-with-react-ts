import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface StoreInitialState {
  name: string;
  quantity: number;
  price: number;
}

const initialState: StoreInitialState = {
  name: "",
  quantity: 0,
  price: 0,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    incrementQuantity(state) {
      state.quantity += 1;
    },
    decrementQuantity(state) {
      state.quantity -= 1;
    },
  },
});

export default storeSlice.reducer;

export const { incrementQuantity, decrementQuantity } = storeSlice.actions;

export const storeSelector = (state: RootState) => state.store;
