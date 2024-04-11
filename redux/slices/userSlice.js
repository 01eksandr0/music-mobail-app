import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: "", email: "" },
  reducers: {
    createUser: {
      reducer(state, action) {
        return { token: action.payload.token, email: action.payload.email };
      },
      prepare(token, email) {
        return { payload: { token, email } };
      },
    },
  },
});

export const { createUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
