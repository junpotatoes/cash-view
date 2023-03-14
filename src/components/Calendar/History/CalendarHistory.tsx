import HistoryComparison from '@/components/Calendar/History/HistoryComparison';
import HistoryDetail from '@/components/Calendar/History/HistoryDetail';
import * as S from '@/styles/Calendar/History/CalendarHistory.style';
import { useState } from 'react';
import { HistoryProps } from '@/components/Layout/Route';
import AddHistoryForm from '@/components/Calendar/History/Modal/AddHistoryForm';

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
      <AddHistoryForm addModal={addModal} setAddModal={setAddModal} />
    </S.CalendarHistoryContainer>
  );
}

export default CalendarHistory;
