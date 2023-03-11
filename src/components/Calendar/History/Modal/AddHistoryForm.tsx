import { useState } from 'react';
import SelectClass from '@/components/Calendar/History/Modal/SelectClass';
import IncomeCategory from '@/components/Calendar/History/Modal/IncomeCategory';
import ExpensesCategory from '@//components/Calendar/History/Modal/ExpensesCategory';
import * as S from '@/styles/Calendar/Addhistory/AddHistory.style';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { AddModalProps } from '@/components/Calendar/History/CalendarHistory';
import { baseAPI } from '@/api/customAxios';
import { onToggle } from '@/store/historySlice';
import Alert from '@/components/Alert/Alert';

export interface FormState {
  id?: number;
  year?: number;
  month?: number;
  date?: number;
  value?: string;
  category?: string;
  content?: string;
  amount?: number;
}

export interface FormStateProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

function AddHistoryForm({ addModal, setAddModal }: AddModalProps) {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<FormState>({});
  const [alert, setAlert] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const reqbody = {
      year: calendar.year,
      month: calendar.month,
      date: calendar.date,
      value: formState.value,
      category: formState.category,
      content: formState.content,
      amount: formState.amount,
      userId: JSON.parse(localStorage.user).userId
    };

    try {
      await baseAPI.post('/historys', reqbody);
      setAddModal(false);
      dispatch(onToggle(true));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.ItemContainer onSubmit={onSubmit}>
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
            setFormState({
              ...formState,
              amount: e.target.valueAsNumber
            })
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
            추가
          </button>
          <Alert
            message="내역이 추가되었습니다."
            trueText="확인"
            alertModal={alert}
            setAlertModal={setAlert}
          />
          <button
            type="reset"
            className="red"
            onClick={() => setAddModal(false)}
          >
            취소
          </button>
        </div>
      </S.ButtonBox>
    </S.ItemContainer>
  );
}

export default AddHistoryForm;
