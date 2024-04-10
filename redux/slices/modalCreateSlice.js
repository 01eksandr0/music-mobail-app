import { createSlice } from "@reduxjs/toolkit";

const modalCreateSlice = createSlice({
  name: "modalCreate",
  initialState: false,
  reducers: {
    openModalCreate: {
      reducer(state) {
        return true;
      },
      prepare(...arg) {
        return { payload: null };
      },
    },
    closeModalCreate: {
      reducer(state) {
        return false;
      },
    },
  },
});

export const { openModalCreate, closeModalCreate } = modalCreateSlice.actions;
export const modalCreateReducer = modalCreateSlice.reducer;
