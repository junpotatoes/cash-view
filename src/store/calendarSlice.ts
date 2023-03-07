import { createSlice } from '@reduxjs/toolkit';

type Calendar = {
  year: number;
  month: number;
  date: number;
  prevMonthDate: number;
  nextMonthDate: number;
  mobileCalendar: boolean;
};

const localCalendar = localStorage.calendar;

const updateLocalCalendar = (state: Calendar) => {
  localStorage.calendar = JSON.stringify({
    year: state.year,
    month: state.month,
    date: state.date
  });
};

const initialState: Calendar = {
  year: localCalendar
    ? JSON.parse(localCalendar).year
    : new Date().getFullYear(),
  month: localCalendar
    ? JSON.parse(localCalendar).month
    : new Date().getMonth() + 1,
  date: localCalendar ? JSON.parse(localCalendar).date : new Date().getDate(),
  prevMonthDate: 0,
  nextMonthDate: 0,
  mobileCalendar: false
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    prevMonth: (state) => {
      if (state.month === 1) {
        state.year -= 1;
        state.month = 12;
      } else {
        state.month -= 1;
      }

      (state.date = 1),
        (state.prevMonthDate = 0),
        (state.nextMonthDate = 0),
        (state.mobileCalendar = false);

      updateLocalCalendar(state);
    },
    nextMonth: (state) => {
      if (state.month === 12) {
        state.year += 1;
        state.month = 1;
      } else {
        state.month += 1;
      }

      (state.date = 1),
        (state.prevMonthDate = 0),
        (state.nextMonthDate = 0),
        (state.mobileCalendar = false);

      updateLocalCalendar(state);
    },
    clickCalendar: (state, action) => {
      (state.date = action.payload.name === 'date' ? action.payload.date : 0),
        (state.prevMonthDate =
          action.payload.name === 'prevMonthDate' ? action.payload.date : 0),
        (state.nextMonthDate =
          action.payload.name === 'nextMonthDate' ? action.payload.date : 0),
        (state.mobileCalendar = false);

      updateLocalCalendar(state);
    },
    toggleMobileCalendar: (state, action) => {
      state.mobileCalendar = action.payload.mobileCalendar;
    },
    changeCalendar: (state, action) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.date = action.payload.date;

      updateLocalCalendar(state);
    },
    changeMonth: (state, action) => {
      state.month = action.payload.month;
      state.date = 1;
      state.mobileCalendar = false;

      updateLocalCalendar(state);
    },
    prevYear: (state) => {
      state.year -= 1;
    },
    nextYear: (state) => {
      state.year += 1;
    }
  }
});

export const {
  prevMonth,
  nextMonth,
  clickCalendar,
  toggleMobileCalendar,
  changeCalendar,
  changeMonth,
  prevYear,
  nextYear
} = calendarSlice.actions;
export default calendarSlice;
