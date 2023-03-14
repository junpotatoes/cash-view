import IncomeCategory from '@/components/Calendar/History/Modal/IncomeCategory';
import ExpensesCategory from '@/components/Calendar/History/Modal/ExpensesCategory';
import SelectClass from '@/components/Calendar/History/Modal/SelectClass';
import * as S from '@/styles/Calendar/Addhistory/AddHistory.style';
import { baseAPI } from '@/api/customAxios';
import { useAppDispatch } from '@/hooks/store';
import { onToggle } from '@/store/historySlice';
import { useEffect, useState } from 'react';
import Alert from '@/components/Alert/Alert';
import { ModalWrapper } from '@/styles/Global/modal.style';
import { FormState } from '@/components/Calendar/History/Modal/AddHistoryForm';

interface UpdateFormProps {
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

function EditHistoryForm({ updateModal, setUpdateModal, id }: UpdateFormProps) {
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<FormState>({});
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    baseAPI.get(`/historys/${id}`).then((res) => {
      setFormState(res.data);
    });
  }, []);

  const clickEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reqbody = {
      value: formState.value,
      category: formState.category,
      amount: formState.amount,
      content: formState.content
    };

    try {
      await baseAPI.patch(`/historys/${id}`, reqbody);
      dispatch(onToggle(true));
      setUpdateModal(false);
      setAlert(true);
    } catch {}
  };

  return (
    <>
      <ModalWrapper
        isOpen={updateModal}
        onClick={() => setUpdateModal(false)}
      />

      <S.ModalContainer modal={updateModal}>
        <div className="editHistoryHeader">
          <h3 className="editCalendar">
            {`${formState.year}년 ${formState.month}월 ${formState.date}일`}
          </h3>
        </div>

        <S.ItemContainer onSubmit={clickEdit}>
          <S.ItemBox>
            <p className="itemTitle">분류</p>
            <p className="itemContent">
              <SelectClass formState={formState} setFormState={setFormState} />
            </p>
          </S.ItemBox>

          <S.ItemBox>
            <p className="itemTitle">카테고리</p>
            <p className="itemContent">
              {formState.value === '수입' ? (
                <IncomeCategory
                  formState={formState}
                  setFormState={setFormState}
                />
              ) : (
                <ExpensesCategory
                  formState={formState}
                  setFormState={setFormState}
                />
              )}
            </p>
          </S.ItemBox>

          <S.ItemBox>
            <label htmlFor="amount" className="itemTitle">
              금액
            </label>
            <input
              type={'number'}
              id="amount"
              className="underline itemContent"
              value={formState.amount || ''}
              onChange={(e) =>
                setFormState({ ...formState, amount: e.target.valueAsNumber })
              }
              required
            />
          </S.ItemBox>

          <S.ItemBox>
            <label htmlFor="content" className="itemTitle">
              내용
            </label>
            <input
              type={'text'}
              id="content"
              className="underline itemContent"
              value={formState.content || ''}
              onChange={(e) =>
                setFormState({ ...formState, content: e.target.value })
              }
              required
            />
          </S.ItemBox>

          <S.ButtonBox>
            <div className="option">
              <button type="submit" className="blue">
                수정
              </button>
              <button
                type="reset"
                className="red"
                onClick={() => setUpdateModal(false)}
              >
                취소
              </button>
            </div>
          </S.ButtonBox>
        </S.ItemContainer>
      </S.ModalContainer>

      <Alert
        message="내역이 수정되었습니다."
        trueText="확인"
        alertModal={alert}
        setAlertModal={setAlert}
      />
    </>
  );
}

export default EditHistoryForm;
