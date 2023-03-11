import { useAppSelector } from '@/hooks/store';
import { HistoryProps } from '@/pages/Calendar';

function ComparisonPrevMonth({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const checkDateTotal = (year: number, month: number, date?: number) => {
    const filteredHistory = date
      ? history.filter(
          (el) =>
            el.value === '지출' &&
            el.year === year &&
            el.month === month &&
            el.date <= date
        )
      : history.filter(
          (el) => el.value === '지출' && el.year === year && el.month === month
        );

    return filteredHistory
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

  const checkPrevMonth = (
    year: number,
    month: number,
    date?: number
  ): number => {
    let result = 0;

    if (month === 1) {
      result = checkDateTotal(year, month, date) - checkDateTotal(year - 1, 12);
    } else {
      result =
        checkDateTotal(year, month, date) - checkDateTotal(year, month - 1);
    }

    return Math.abs(result);
  };

  return (
    <div className="prevMonth">
      지난달보다{' '}
      {calendar.prevMonthDate
        ? checkPrevMonth(
            calendar.month === 1 ? calendar.year - 1 : calendar.year,
            calendar.month === 1 ? 12 : calendar.month - 1,
            calendar.prevMonthDate
          ).toLocaleString('ko-KR')
        : calendar.nextMonthDate
        ? checkPrevMonth(
            calendar.month === 12 ? calendar.year + 1 : calendar.year,
            calendar.month === 12 ? 1 : calendar.month + 1,
            calendar.nextMonthDate
          ).toLocaleString('ko-KR')
        : checkPrevMonth(
            calendar.year,
            calendar.month,
            calendar.date
          ).toLocaleString('ko-KR')}
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
    </div>
  );
}

export default ComparisonPrevMonth;
