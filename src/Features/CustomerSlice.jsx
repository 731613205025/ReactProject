import { createSlice } from "@reduxjs/toolkit";
import { AddCusotmer } from "../AddCustomer";

const initialState = [];
const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
  },
});
export const { addCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
