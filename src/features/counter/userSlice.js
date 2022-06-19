import { createSlice } from '@reduxjs/toolkit';

export const usererSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = usererSlice.actions;

export const selectuser = state => state.user.user;
export default usererSlice.reducer;