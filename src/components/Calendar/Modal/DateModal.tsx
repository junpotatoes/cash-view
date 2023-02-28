import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { changeCalendar } from '../../../store/calendarSlice';

function DateModal() {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={new Date(`${calendar.year}-${calendar.month}-${calendar.date}`)}
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
