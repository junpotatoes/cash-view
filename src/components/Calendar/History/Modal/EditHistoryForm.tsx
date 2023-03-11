import IncomeCategory from '@/components/Calendar/History/Modal/IncomeCategory';
import ExpensesCategory from '@/components/Calendar/History/Modal/ExpensesCategory';
import SelectClass from '@/components/Calendar/History/Modal/SelectClass';
import * as S from '@/styles/Calendar/Addhistory/AddHistory.style';
import { UpdateFormProps } from '@/components/Calendar/History/Modal/EditHistory';
import { baseAPI } from '@/api/customAxios';
import { useAppDispatch } from '@/hooks/store';
import { onToggle } from '@/store/historySlice';
import { useState } from 'react';
import Alert from '@/components/Alert/Alert';

function EditHistoryForm({
  formState,
  setFormState,
  setUpdateModal,
  id
}: UpdateFormProps) {
  const dispatch = useAppDispatch();
  const [alert, setAlert] = useState(false);

  const clickEdit = async () => {
    const reqbody = {
      value: formState.value,
      category: formState.category,
      amount: formState.amount,
      content: formState.content
    };

    try {
      await baseAPI.patch(`/historys/${id}`, reqbody);
      setUpdateModal(false);
      dispatch(onToggle(true));
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
            <IncomeCategory formState={formState} setFormState={setFormState} />
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
          <Alert
            message="내역이 수정되었습니다."
            trueText="확인"
            alertModal={alert}
            setAlertModal={setAlert}
          />
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
  );
}

export default EditHistoryForm;
