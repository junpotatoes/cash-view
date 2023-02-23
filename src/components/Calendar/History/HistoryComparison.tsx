import * as S from '../../../styles/Calendar/History/HistoryComparison.style';
import HistoryDate from './HistoryDate';

function HistoryComparison() {
  return (
    <S.HistoryComparisonContainer>
      <HistoryDate />

      <p className="today">오늘까지 50000원 썼어요</p>

      <p className="prevMonth">지난달 이맘때보다 1000원 덜 썼어요</p>
    </S.HistoryComparisonContainer>
  );
}

export default HistoryComparison;
