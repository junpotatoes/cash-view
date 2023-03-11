import { useAppSelector } from '@/hooks/store';
import { HistoryProps } from '@/pages/Calendar';

function ComparisonToday({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const checkTodayTotal = (
    year: number,
    month: number,
    date: number
  ): string => {
    return history
      .filter(
        (el) =>
          el.value === '지출' &&
          el.year === year &&
          el.month === month &&
          el.date <= date
      )
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0)
      .toLocaleString('ko-KR');
  };

  return (
    <div className="today">
      지금까지{' '}
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
    </div>
  );
}

export default ComparisonToday;
