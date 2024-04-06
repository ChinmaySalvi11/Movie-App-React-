import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const Userstore = configureStore({
  reducer: {
    users: UserSlice.reducer,
  },
});

export default Userstore;
