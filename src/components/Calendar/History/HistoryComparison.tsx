import { useAppSelector } from '../../../hooks/store';
import { HistoryProps } from '../../../pages/Calendar';
import * as S from '../../../styles/Calendar/History/HistoryComparison.style';
import HistoryDate from './HistoryDate';

function HistoryComparison({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const checkTodayTotal = (
    year: number,
    month: number,
    date: number
  ): number => {
    return history
      .filter(
        (el) =>
          el.value === '지출' &&
          el.year === year &&
          el.month === month &&
          el.date <= date
      )
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

  const checkDateTotal = (year: number, month: number, date: number) => {
    return history
      .filter(
        (el) =>
          el.value === '지출' &&
          el.year === year &&
          el.month === month &&
          el.date === date
      )
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

  const checkPrevMonth = (
    year: number,
    month: number,
    date: number
  ): number => {
    let result = 0;

    if (month === 1) {
      result =
        checkDateTotal(year, month, date) - checkDateTotal(year - 1, 12, date);
    } else {
      result =
        checkDateTotal(year, month, date) -
        checkDateTotal(year, month - 1, date);
    }

    return result;
  };

  return (
    <S.HistoryComparisonContainer>
      <HistoryDate />

      <p className="today">
        오늘까지{' '}
        {calendar.prevMonthDate
          ? checkTodayTotal(
              calendar.month === 1 ? calendar.year - 1 : calendar.year,
              calendar.month === 1 ? 12 : calendar.month - 1,
              calendar.prevMonthDate
            )
          : calendar.nextMonthDate
          ? checkTodayTotal(
              calendar.month === 12 ? calendar.year + 1 : calendar.year,
              calendar.month === 12 ? 1 : calendar.month + 1,
              calendar.nextMonthDate
            )
          : checkTodayTotal(calendar.year, calendar.month, calendar.date)}
        원 썼어요
      </p>

      {history.filter((el) =>
        calendar.prevMonthDate
          ? el.year ===
              (calendar.month === 1 ? calendar.year - 1 : calendar.year) &&
            el.month === (calendar.month === 1 ? 12 : calendar.month - 1) &&
            el.date === calendar.prevMonthDate
          : calendar.nextMonthDate
          ? el.year ===
              (calendar.month === 12 ? calendar.year + 1 : calendar.year) &&
            el.month === (calendar.month === 12 ? 1 : calendar.month + 1) &&
            el.date === calendar.nextMonthDate
          : el.year === calendar.year &&
            el.month === calendar.month &&
            el.date === calendar.date
      )[0] ? (
        <p className="prevMonth">
          지난달 이맘때보다{' '}
          {calendar.prevMonthDate
            ? Math.abs(
                checkPrevMonth(
                  calendar.month === 1 ? calendar.year - 1 : calendar.year,
                  calendar.month === 1 ? 12 : calendar.month - 1,
                  calendar.prevMonthDate
                )
              )
            : calendar.nextMonthDate
            ? Math.abs(
                checkPrevMonth(
                  calendar.month === 12 ? calendar.year + 1 : calendar.year,
                  calendar.month === 12 ? 1 : calendar.month + 1,
                  calendar.nextMonthDate
                )
              )
            : Math.abs(
                checkPrevMonth(calendar.year, calendar.month, calendar.date)
              )}
          원{' '}
          {(calendar.prevMonthDate
            ? checkPrevMonth(
                calendar.month === 1 ? calendar.year - 1 : calendar.year,
                calendar.month === 1 ? 12 : calendar.month - 1,
                calendar.prevMonthDate
              )
            : calendar.nextMonthDate
            ? checkPrevMonth(
                calendar.month === 12 ? calendar.year + 1 : calendar.year,
                calendar.month === 12 ? 1 : calendar.month + 1,
                calendar.nextMonthDate
              )
            : checkPrevMonth(calendar.year, calendar.month, calendar.date)) > 0
            ? '더'
            : '덜'}{' '}
          썼어요
        </p>
      ) : null}
    </S.HistoryComparisonContainer>
  );
}

export default HistoryComparison;
