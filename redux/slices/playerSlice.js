import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: { status: false, items: [] },
  reducers: {
    openPlayer: {
      reducer(state, action) {
        return { status: true, items: [...action.payload.items] };
      },
      prepare(items) {
        return { payload: { items: [...items] } };
      },
    },
    closePlayer: {
      reducer(state) {
        return { status: false, items: [] };
      },
      prepare() {
        return {};
      },
    },
  },
});
export const { openPlayer, closePlayer } = playerSlice.actions;
export const playerReduser = playerSlice.reducer;
