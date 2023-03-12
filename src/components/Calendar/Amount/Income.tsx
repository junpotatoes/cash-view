import { useAppSelector } from '@/hooks/store';
import { HistoryProps } from '@/components/Layout/Route';

function Income({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <strong className="amount">
      총 수입:{' '}
      {history
        .filter(
          (el) =>
            el.value === '수입' &&
            el.year === calendar.year &&
            el.month === calendar.month
        )
        .map((el) => el.amount)
        .reduce((acc, cur) => acc + cur, 0)
        .toLocaleString('ko-KR')}
    </strong>
  );
}

export default Income;
