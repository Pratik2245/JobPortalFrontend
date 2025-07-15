import { createSlice } from "@reduxjs/toolkit";
import { updateProfile } from "../Services/ProfileServices";
const ProfileSlice = createSlice({
  name: "profile",
  initialState: {},
  // object of multiple functions
  reducers: {
    changeProfile: (state, action) => {
      state = updateProfile(action.payload);
      return action.payload;
    },
    setProfile: (state, action) => {
      console.log(action.payload);

      return action.payload;
    },
  },
});
export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
