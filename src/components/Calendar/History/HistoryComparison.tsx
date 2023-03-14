import * as S from '@/styles/Calendar/History/HistoryComparison.style';
import ComparisonPrevMonth from '@/components/Calendar/History/Comparison/ComparisonPrevMonth';
import ComparisonToday from '@/components/Calendar/History/Comparison/ComparisonToday';
import HistoryDate from '@/components/Calendar/History/HistoryDate';
import { useAppSelector } from '@/hooks/store';
import { HistoryProps } from '@/components/Layout/Route';

function HistoryComparison({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <S.HistoryComparisonContainer>
      <HistoryDate />

      {history.filter((el) => el.month === calendar.month)[0] ? (
        <>
          <ComparisonToday history={history} />
          <ComparisonPrevMonth history={history} />
        </>
      ) : (
        <div className="noData">
          <p>데이터가 없습니다</p>
          <p>수입/지출 내역을 입력해주세요</p>
        </div>
      )}
    </S.HistoryComparisonContainer>
  );
}

export default HistoryComparison;
