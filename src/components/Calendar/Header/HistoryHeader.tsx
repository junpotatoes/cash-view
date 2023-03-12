import { useAppSelector } from '@/hooks/store';
import HistoryDate from '@/components/Calendar/History/HistoryDate';
import { HistoryProps } from '@/components/Layout/Route';

function HistoryHeader({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

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
    <div className="headerBox">
      <HistoryDate />

      <div className="infoBox">
        <strong className="blue">
          수입{' '}
          {calendar.prevMonthDate
            ? checkTotal(
                '수입',
                calendar.month === 1 ? calendar.year - 1 : calendar.year,
                calendar.month === 1 ? 12 : calendar.month - 1,
                calendar.prevMonthDate
              ).toLocaleString('ko-KR')
            : calendar.nextMonthDate
            ? checkTotal(
                '수입',
                calendar.month === 12 ? calendar.year + 1 : calendar.year,
                calendar.month === 12 ? 1 : calendar.month + 1,
                calendar.date
              ).toLocaleString('ko-KR')
            : checkTotal(
                '수입',
                calendar.year,
                calendar.month,
                calendar.date
              ).toLocaleString('ko-KR')}
        </strong>

        <strong className="red">
          지출{' '}
          {calendar.prevMonthDate
            ? checkTotal(
                '지출',
                calendar.month === 1 ? calendar.year - 1 : calendar.year,
                calendar.month === 1 ? 12 : calendar.month - 1,
                calendar.prevMonthDate
              ).toLocaleString('ko-KR')
            : calendar.nextMonthDate
            ? checkTotal(
                '지출',
                calendar.month === 12 ? calendar.year + 1 : calendar.year,
                calendar.month === 12 ? 1 : calendar.month + 1,
                calendar.nextMonthDate
              ).toLocaleString('ko-KR')
            : checkTotal(
                '지출',
                calendar.year,
                calendar.month,
                calendar.date
              ).toLocaleString('ko-KR')}
        </strong>
      </div>
    </div>
  );
}

export default HistoryHeader;
