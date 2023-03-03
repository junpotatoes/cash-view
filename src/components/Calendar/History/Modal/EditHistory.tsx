import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/store';
import * as S from '@/styles/Calendar/Addhistory/AddHistory.style';
import { UpdateModalProps } from '@/components/Calendar/History/HistoryDetail';
import { FormState } from '@/components/Calendar/History/Modal/AddHistoryForm';
import EditHistoryForm from '@/components/Calendar/History/Modal/EditHistoryForm';

export interface UpdateFormProps extends UpdateModalProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

function EditHistory({ updateModal, setUpdateModal, id }: UpdateModalProps) {
  const calendar = useAppSelector((state) => state.calendar);
  const [formState, setFormState] = useState<FormState>({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/historys/${id}`)
      .then((res) => {
        setFormState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <S.ModalWrapper
        modal={updateModal}
        onClick={() => setUpdateModal(false)}
      />

      <S.ModalContainer modal={updateModal}>
        <div className="editHistoryHeader">
          <h3 className="editCalendar">
            {`${formState.year}년 ${formState.month}월 ${formState.date}일`}
          </h3>
        </div>

        <EditHistoryForm
          formState={formState}
          setFormState={setFormState}
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
          id={id}
        />
      </S.ModalContainer>
    </>
  );
}

export default EditHistory;
