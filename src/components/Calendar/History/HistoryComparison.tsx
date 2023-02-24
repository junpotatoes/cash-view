import { useAppSelector } from '../../../hooks/store';
import * as S from '../../../styles/Calendar/History/HistoryComparison.style';
import { HistroyProps } from './CalendarHistory';
import HistoryDate from './HistoryDate';

function HistoryComparison({ history }: HistroyProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const checkMonthTotal = (year: number, month: number): number => {
    return history
      .filter(
        (el) => el.value === '지출' && el.year === year && el.month === month
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
        오늘까지 {checkMonthTotal(calendar.year, calendar.month)}원 썼어요
      </p>

      {history.filter(
        (el) =>
          el.year === calendar.year &&
          el.month === calendar.month &&
          el.date === calendar.date
      )[0] ? (
        <p className="prevMonth">
          지난달 이맘때보다{' '}
          {Math.abs(
            checkPrevMonth(calendar.year, calendar.month, calendar.date)
          )}
          원{' '}
          {checkPrevMonth(calendar.year, calendar.month, calendar.date) > 0
            ? '더'
            : '덜'}{' '}
          썼어요
        </p>
      ) : null}
    </S.HistoryComparisonContainer>
  );
}

export default HistoryComparison;
