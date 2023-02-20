import { useState } from 'react';
import CalendarHeader from '../components/Calendar/Header';

interface Date {
  year: number;
  month: number;
  date: number;
  day: number;
}

function Calendar(): JSX.Element {
  const date: Date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay()
  };
  const [currentYear, setCurrentYear] = useState(date.year);
  const [currentMonth, setCurrentMonth] = useState(date.month);
  const dateCount: number = new Date(currentYear, currentMonth, 0).getDate();
  const week: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <>
      <CalendarHeader
        currentYear={currentYear}
        currentMonth={currentMonth}
        setCurrentYear={setCurrentYear}
        setCurrentMonth={setCurrentMonth}
      />
    </>
  );
}

export default Calendar;
