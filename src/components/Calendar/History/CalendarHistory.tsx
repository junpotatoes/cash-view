import HistoryComparison from './HistoryComparison';
import HistoryDetail from './HistoryDetail';
import * as S from '../../../styles/Calendar/History/CalendarHistory.style';
import { HistoryProps } from '../../../pages/Calendar';
import AddHistory from './Modal/AddHistory';
import { useState } from 'react';

export interface AddModalProps {
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CalendarHistory({ history }: HistoryProps) {
  const [addModal, setAddModal] = useState(false);

  return (
    <S.CalendarHistoryContainer>
      <HistoryDetail history={history} />
      <HistoryComparison history={history} />
      <button
        type="button"
        className="addHistoryButton"
        onClick={() => setAddModal(true)}
      >
        +
      </button>
      <AddHistory addModal={addModal} setAddModal={setAddModal} />
    </S.CalendarHistoryContainer>
  );
}

export default CalendarHistory;
