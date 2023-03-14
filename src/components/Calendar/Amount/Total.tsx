import { HistoryProps } from '@/components/Layout/Route';
import { useAppSelector } from '@/hooks/store';

function Total({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <strong className="amount">
      총 합계:{' '}
      {(
        history
          .filter(
            (el) =>
              el.value === '수입' &&
              el.year === calendar.year &&
              el.month === calendar.month
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0) -
        history
          .filter(
            (el) =>
              el.value === '지출' &&
              el.year === calendar.year &&
              el.month === calendar.month
          )
          .map((el) => el.amount)
          .reduce((acc, cur) => acc + cur, 0)
      ).toLocaleString('ko-KR')}
    </strong>
  );
}

export default Total;
