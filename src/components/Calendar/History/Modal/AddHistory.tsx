import BasicDatePicker from '../../Modal/Datepicker';
import AddHistoryForm from './AddHistoryForm';
import * as S from '../../../../styles/Calendar/Addhistory/AddHistory.style';
import { AddModalProps } from '../CalendarHistory';

function AddHistory({ addModal, setAddModal }: AddModalProps) {
  return (
    <>
      <S.ModalWrapper modal={addModal} onClick={() => setAddModal(false)} />

      <S.ModalContainer modal={addModal}>
        <BasicDatePicker />

        <AddHistoryForm addModal={addModal} setAddModal={setAddModal} />
      </S.ModalContainer>
    </>
  );
}

export default AddHistory;
