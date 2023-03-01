import { HistoryProps } from '../../../pages/Calendar';
import * as S from '../../../styles/Calendar/History/HistoryComparison.style';
import ComparisonPrevMonth from './Comparison/ComparisonPrevMonth';
import ComparisonToday from './Comparison/ComparisonToday';
import HistoryDate from './HistoryDate';

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
