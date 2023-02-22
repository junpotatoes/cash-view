import { configureStore } from '@reduxjs/toolkit';
import calendarSlice from './calendarSlice';
import historySlice from './historySlice';

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    history: historySlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
