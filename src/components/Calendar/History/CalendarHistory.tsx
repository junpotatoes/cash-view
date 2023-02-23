import HistoryComparison from './HistoryComparison';
import HistoryDetail from './HistoryDetail';
import * as S from '../../../styles/Calendar/History/CalendarHistory.style';

function CalendarHistory() {
  return (
    <S.CalendarHistoryContainer>
      <HistoryDetail />
      <HistoryComparison />
    </S.CalendarHistoryContainer>
  );
}

export default CalendarHistory;
