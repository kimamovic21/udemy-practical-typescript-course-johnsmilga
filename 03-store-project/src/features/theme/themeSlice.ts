import { createSlice } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light' | 'system';

const initialState = {
  name: 'theme slice',
};
const userSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export default userSlice.reducer;