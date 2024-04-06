import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: { status: false, track: "" },
  reducers: {
    openPlayer: {
      reducer(state, action) {
        return { status: true, track: action.payload };
      },
      prepare(id) {
        return { payload: id };
      },
    },
    closePlayer: {
      reducer(state) {
        return { status: false, id: "" };
      },
      prepare() {
        return {};
      },
    },
  },
});

export const { openPlayer, closePlayer } = playerSlice.actions;
export const playerReduser = playerSlice.reducer;
