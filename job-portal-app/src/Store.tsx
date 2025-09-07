import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice";
const Store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    filter:filterReducer,
  },
});
export default Store;
