import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    UserData: (state , action) => {
      state.users = action.payload
    },
  },
});

export const { UserData } = userSlice.actions;
export default userSlice.reducer;
