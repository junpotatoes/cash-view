import AddHistoryForm from '@/components/Calendar/History/Modal/AddHistoryForm';
import * as S from '@/styles/Calendar/Addhistory/AddHistory.style';
import { AddModalProps } from '@/components/Calendar/History/CalendarHistory';
import DateModal from '@/components/Calendar/Modal/DateModal';
import { ModalWrapper } from '@/styles/Global/modal.style';

function AddHistory({ addModal, setAddModal }: AddModalProps) {
  return (
    <>
      <ModalWrapper isOpen={addModal} onClick={() => setAddModal(false)} />

      <S.ModalContainer modal={addModal}>
        <DateModal />

        <AddHistoryForm addModal={addModal} setAddModal={setAddModal} />
      </S.ModalContainer>
    </>
  );
}

export default AddHistory;
