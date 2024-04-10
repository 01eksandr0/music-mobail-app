import { createSlice } from "@reduxjs/toolkit";

const favoriteTracksSlice = createSlice({
  name: "favoritesTracks",
  initialState: [],
  reducers: {
    addNewTrack: {
      reducer(state, action) {
        state.push(action.payload.id);
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
    deleteTrack: {
      reducer(state, action) {
        return state.filter((i) => i !== action.payload.id);
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
  },
});
export const { addNewTrack, deleteTrack } = favoriteTracksSlice.actions;
export const favoritesTracksReducer = favoriteTracksSlice.reducer;
