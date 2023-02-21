import { createSlice } from '@reduxjs/toolkit';

type History = {
  history: {
    id: number;
    year: number;
    month: number;
    date: number;
    value: string;
    category: string;
    amount: number;
    content: string;
  }[];
};

const initialState: History = {
  history: []
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {}
});

export default historySlice;
