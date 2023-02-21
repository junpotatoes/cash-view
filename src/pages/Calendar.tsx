import { Dispatch, SetStateAction, useState } from 'react';
import CalendarHeader from '../components/Calendar/Header/CalendarHeader';
import CalendarMain from '../components/Calendar/Main/CalendarMain';

interface Calendar {
  year: number;
  month: number;
  date: number;
  prevDate: number;
  nextDate: number;
}

export interface Props {
  calendar: Calendar;
  setCalendar: Dispatch<SetStateAction<Calendar>>;
  isOpenMobileCalendar: boolean;
  setIsOpenMobileCalendar: Dispatch<SetStateAction<boolean>>;
}

function Calendar(): JSX.Element {
  const [calendar, setCalendar] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    prevDate: 0,
    nextDate: 0
  });
  const [isOpenMobileCalendar, setIsOpenMobileCalendar] = useState(false);

  return (
    <>
      <CalendarHeader
        calendar={calendar}
        setCalendar={setCalendar}
        isOpenMobileCalendar={isOpenMobileCalendar}
        setIsOpenMobileCalendar={setIsOpenMobileCalendar}
      />

      <CalendarMain
        calendar={calendar}
        setCalendar={setCalendar}
        isOpenMobileCalendar={isOpenMobileCalendar}
        setIsOpenMobileCalendar={setIsOpenMobileCalendar}
      />
    </>
  );
}

export default Calendar;
