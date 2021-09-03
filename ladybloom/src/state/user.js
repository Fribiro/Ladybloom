import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    accesstoken: null,
    refreshtoken: null,
  },
  mentors: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSet(state, action) {
      console.log(action.payload)
      state.user.accesstoken = action.payload;
    },
    mentorsSet(state, action){
      state.mentors.push(action.payload)
    }
  },
});

export const { userSet, mentorsSet } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectMentors = (state) => state.user.mentors;

export default userSlice.reducer;
