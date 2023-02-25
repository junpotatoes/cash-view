import HistoryComparison from './HistoryComparison';
import HistoryDetail from './HistoryDetail';
import * as S from '../../../styles/Calendar/History/CalendarHistory.style';
import { HistoryProps } from '../../../pages/Calendar';

function CalendarHistory({ history }: HistoryProps) {
  return (
    <S.CalendarHistoryContainer>
      <HistoryDetail history={history} />
      <HistoryComparison history={history} />
      <button type="button" className="addHistoryButton">
        +
      </button>
    </S.CalendarHistoryContainer>
  );
}

export default CalendarHistory;
