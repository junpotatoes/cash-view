import * as S from '../../../styles/Calendar/Main/CalendarDate.style';
import { useAppSelector } from '../../../hooks/store';
import { HistoryProps } from '../../../pages/Calendar';
import PrevMonthDate from './Date/PrevMonthDate';
import CurrentMonthDate from './Date/CurrentMonthDate';
import NextMonthDate from './Date/NextMonthDate';
import MobileMonthDate from './Date/MobileMonthDate';

export interface CalendarDateProps {
  key?: number;
  date: number;
  checkTotal: (
    value: string,
    year: number,
    month: number,
    date: number
  ) => number;
}

function CalendarDate({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const startDay: number = new Date(
    calendar.year,
    calendar.month - 1,
    1
  ).getDay();

  const endDate: number = new Date(calendar.year, calendar.month, 0).getDate();

  const prevEndDate: number = new Date(
    calendar.year,
    calendar.month - 1,
    0
  ).getDate();

  const checkTotal = (
    value: string,
    year: number,
    month: number,
    date: number
  ): number => {
    return history
      .filter(
        (el) =>
          el.value === value &&
          el.year === year &&
          el.month === month &&
          el.date === date
      )
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

  return (
    <S.CalendarDateWrapper isOpenMobileCalendar={calendar.mobileCalendar}>
      <S.CalendarDateContainer isOpenMobileCalendar={calendar.mobileCalendar}>
        {Array(35)
          .fill(1)
          .map((el, idx) =>
            idx < startDay ? (
              <PrevMonthDate
                key={idx}
                date={prevEndDate - startDay + idx + 1}
                checkTotal={checkTotal}
              />
            ) : idx <= endDate + startDay - 1 ? (
              <CurrentMonthDate
                key={idx}
                date={idx - startDay + 1}
                checkTotal={checkTotal}
              />
            ) : (
              <NextMonthDate
                key={idx}
                date={idx - endDate - startDay + 1}
                checkTotal={checkTotal}
              />
            )
          )}
      </S.CalendarDateContainer>

      <MobileMonthDate />
    </S.CalendarDateWrapper>
  );
}

export default CalendarDate;
