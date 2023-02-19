import BasicDatePicker from '../../Datepicker';
import AddHistoryForm from './AddHistoryForm';
import * as S from '../../../styles/historymodal/history.style';

function AddHistory() {
  return (
    <>
      <S.ModalWrapper />

      <S.ModalContainer>
        <BasicDatePicker />

        <AddHistoryForm />
      </S.ModalContainer>
    </>
  );
}

export default AddHistory;
