import { useState } from 'react';
import SelectClass from './SelectClass';
import IncomeCategory from './IncomeCategory';
import ExpensesCategory from './ExpensesCategory';
import axios from 'axios';
import * as S from '../../../../styles/Calendar/Addhistory/AddHistory.style';
import { useAppSelector } from '../../../../hooks/store';
import { AddModalProps } from '../CalendarHistory';

export interface FormState {
  id?: number;
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
    <S.ItemWrapper>
      <S.ItemContainer onSubmit={onSubmit}>
        <S.ItemBox>
          <span className="class">분류</span>
          <span className="select_class">
            <SelectClass formState={formState} setFormState={setFormState} />
          </span>
        </S.ItemBox>
        <S.ItemBox>
          <span>카테고리</span>
          <span>
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
          </span>
        </S.ItemBox>
        <S.ItemBox>
          <span>금액</span>
          <input
            type={'number'}
            className="underline"
            value={formState.amount || ''}
            onChange={(e) =>
              setFormState({
                ...formState,
                amount: e.target.valueAsNumber
              })
            }
          />
          <span>원</span>
        </S.ItemBox>
        <S.ItemBox>
          <span>내용</span>
          <input
            type={'text'}
            className="underline"
            value={formState.content || ''}
            onChange={(e) =>
              setFormState({ ...formState, content: e.target.value })
            }
          />
        </S.ItemBox>
        <S.ButtonBox>
          <div className="option">
            <button type="submit">저장</button>
            <button type="reset" onClick={() => setAddModal(false)}>
              취소
            </button>
          </div>
        </S.ButtonBox>
      </S.ItemContainer>
    </S.ItemWrapper>
  );
}

export default AddHistoryForm;
