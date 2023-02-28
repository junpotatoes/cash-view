import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { changeCalendar } from '../../../store/calendarSlice';

function DateModal() {
  const [value, setValue] = React.useState<Dayjs | null>();
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
          dispatch(
            changeCalendar({
              year: newValue.$y,
              month: newValue.$M + 1,
              date: newValue.$D
            })
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: '200px' }}
            value={`${calendar.year} ${calendar.month} ${calendar.date}`}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default DateModal;
