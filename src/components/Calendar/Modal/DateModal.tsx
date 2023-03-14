import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { changeCalendar } from '@/store/calendarSlice';
import { useEffect, useState } from 'react';

function DateModal() {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();
  const [dateValue, setDateValue] = useState(new Date());

  const checkCalendar = () => {
    if (calendar.prevMonthDate) {
      if (calendar.month === 1) {
        setDateValue(
          new Date(`${calendar.year - 1}-${12}-${calendar.prevMonthDate}`)
        );
      } else {
        setDateValue(
          new Date(
            `${calendar.year}-${calendar.month - 1}-${calendar.prevMonthDate}`
          )
        );
      }
    } else if (calendar.nextMonthDate) {
      if (calendar.month === 12) {
        setDateValue(
          new Date(`${calendar.year + 1}-${1}-${calendar.nextMonthDate}`)
        );
      } else {
        setDateValue(
          new Date(
            `${calendar.year}-${calendar.month + 1}-${calendar.nextMonthDate}`
          )
        );
      }
    } else {
      setDateValue(
        new Date(`${calendar.year}-${calendar.month}-${calendar.date}`)
      );
    }
  };

  useEffect(() => {
    checkCalendar();
  }, [calendar]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={dateValue}
        onChange={(newValue: any) => {
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
