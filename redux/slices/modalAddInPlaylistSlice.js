const { createSlice } = require("@reduxjs/toolkit");

const modalAddInPlaylistSlice = createSlice({
  name: "addPlaylist",
  initialState: { status: false, id: "" },
  reducers: {
    openAddPlaylist: {
      reducer(state, actions) {
        return { status: true, id: actions.payload };
      },
      prepare(id) {
        return { payload: id };
      },
    },
    closeAddPlaylist: {
      reducer(state) {
        return { status: false, id: "" };
      },
    },
  },
});

export const { openAddPlaylist, closeAddPlaylist } =
  modalAddInPlaylistSlice.actions;
export const modalAddInPlaylistReducer = modalAddInPlaylistSlice.reducer;
