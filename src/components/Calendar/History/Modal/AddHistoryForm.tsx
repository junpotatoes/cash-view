import { useState } from 'react';
import SelectClass from '@/components/Calendar/History/Modal/SelectClass';
import IncomeCategory from '@/components/Calendar/History/Modal/IncomeCategory';
import ExpensesCategory from '@//components/Calendar/History/Modal/ExpensesCategory';
import axios from 'axios';
import * as S from '@/styles/Calendar/Addhistory/AddHistory.style';
import { useAppSelector } from '@/hooks/store';
import { AddModalProps } from '@/components/Calendar/History/CalendarHistory';

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
  const [formState, setFormState] = useState<FormState>({});

  const calendar = useAppSelector((state) => state.calendar);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

    if (
      !reqbody.value ||
      !reqbody.category ||
      !reqbody.amount ||
      !reqbody.content
    ) {
      alert('모든 항목을 입력해주세요!');
      return;
    }

    try {
      axios.post('http://localhost:4000/historys', reqbody);
      setAddModal(false);
      window.location.reload();
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
        />
      </S.ItemBox>
      <S.ButtonBox>
        <div className="option">
          <button type="submit" className="blue">
            저장
          </button>
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
