import * as S from '../../../../styles/Calendar/Addhistory/AddHistory.style';
import { updateModalProps } from '../HistoryDetail';
import EditHistoryForm from './EditHistoryForm';

function EditHistory({ updateModal, setUpdateModal, id }: updateModalProps) {
  return (
    <>
      <S.ModalWrapper
        modal={updateModal}
        onClick={() => setUpdateModal(false)}
      />

      <S.ModalContainer modal={updateModal}>
        <EditHistoryForm
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
          id={id}
        />
      </S.ModalContainer>
    </>
  );
}

export default EditHistory;
