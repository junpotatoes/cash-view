import { HistoryProps } from '@/pages/Calendar';
import * as S from '@/styles/Calendar/History/HistoryComparison.style';
import ComparisonPrevMonth from '@/components/Calendar/History/Comparison/ComparisonPrevMonth';
import ComparisonToday from '@/components/Calendar/History/Comparison/ComparisonToday';
import HistoryDate from '@/components/Calendar/History/HistoryDate';

function HistoryComparison({ history }: HistoryProps) {
  return (
    <S.HistoryComparisonContainer>
      <HistoryDate />

      <ComparisonToday history={history} />

      <ComparisonPrevMonth history={history} />
    </S.HistoryComparisonContainer>
  );
}

export default HistoryComparison;
