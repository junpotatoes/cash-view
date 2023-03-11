import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = true;

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    onToggle: (state, action) => {
      return action.payload;
    }
  }
});

export const { onToggle } = historySlice.actions;
export default historySlice;
