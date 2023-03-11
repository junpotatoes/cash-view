import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    onToggle: (state, action) => {
      state = action.payload;
    }
  }
});

export const { onToggle } = historySlice.actions;
export default historySlice;
