import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
const Store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});
export default Store;
