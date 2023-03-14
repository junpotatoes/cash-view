import { useAppSelector } from '@/hooks/store';
import { HistoryProps } from '@/components/Layout/Route';

function Expenditure({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <strong className="amount red">
      총 지출:{' '}
      {history
        .filter(
          (el) =>
            el.value === '지출' &&
            el.year === calendar.year &&
            el.month === calendar.month
        )
        .map((el) => el.amount)
        .reduce((acc, cur) => acc + cur, 0)
        .toLocaleString('ko-KR')}
    </strong>
  );
}

export default Expenditure;
