import { createSlice } from "@reduxjs/toolkit";

const modalMoreInfoSlice = createSlice({
  name: "moreInfo",
  initialState: { status: false, id: "" },
  reducers: {
    openInfo: {
      reducer(state, action) {
        return { status: true, id: action.payload };
      },
      prepare(id) {
        return { payload: id };
      },
    },
    closeInfo: {
      reducer(state) {
        return { status: false, id: "" };
      },
    },
  },
});

export const { openInfo, closeInfo } = modalMoreInfoSlice.actions;
export const modalMoreInfoReducer = modalMoreInfoSlice.reducer;
