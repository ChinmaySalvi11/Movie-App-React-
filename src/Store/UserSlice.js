import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    movieDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const { movieDetails } = UserSlice.actions;
export default UserSlice;
