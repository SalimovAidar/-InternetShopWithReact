import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice ({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setIsAuth(state) {
      state.isAuth = true;
    },
    setIsNotAuth(state) {
      state.isAuth = false;
    },
  },
});

export const { setIsAuth } = authSlice.actions;
export const { setIsNotAuth } = authSlice.actions;
export default authSlice.reducer;