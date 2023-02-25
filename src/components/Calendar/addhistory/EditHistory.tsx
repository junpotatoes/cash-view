import { useState, useEffect } from 'react';
import axios from 'axios';
import IncomeCategory from './IncomeCategory';
import ExpensesCategory from './ExpensesCategory';
import SelectClass from './SelectClass';
import * as S from '../../../styles/Calendar/Addhistory/AddHistory.style';

export interface FormState {
  id?: number;
  value?: string;
  classOption?: string;
  category?: string;
  amount?: number;
  content?: string;
}

export interface FormStateProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

function EditHistory(): JSX.Element {
  const [formState, setFormState] = useState<FormState>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevValues) => ({ ...prevValues, [name]: value }));
  };

  useEffect(() => {
    axios
      .get('http://localhost:4000/historys/1')
      .then((res) => {
        setFormState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditClick = () => {
    const reqbody = {
      value: formState.value,
      category: formState.category,
      amount: formState.amount,
      content: formState.content
    };
    axios.put(`http://localhost:4000/historys/1`, reqbody).catch((err) => {
      console.log(err);
    });
  };

  const handleDeleteClick = () => {
    axios.delete(`http://localhost:4000/historys/1`).catch((err) => {
      console.log(err);
    });
  };

  return (
    <S.ItemWrapper>
      <S.ItemContainer onSubmit={handleEditClick}>
        <S.ItemBox>
          <span className="class">분류</span>
          <span className="select_class">
            <SelectClass formState={formState} setFormState={setFormState} />
          </span>
        </S.ItemBox>
        <S.ItemBox>
          <span>카테고리</span>
          <span>
            {formState.classOption === '수입' ? (
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
            name="amount"
            value={formState.amount || ''}
            onChange={handleInputChange}
          />
          <span>원</span>
        </S.ItemBox>
        <S.ItemBox>
          <span>내용</span>
          <input
            type={'text'}
            className="underline"
            name="content"
            value={formState.content}
            onChange={handleInputChange}
          />
        </S.ItemBox>
        <S.ButtonBox>
          <div className="option">
            <button type="submit" className="save__Modal">
              저장
            </button>
            <button type="reset" className="close__Modal">
              취소
            </button>
          </div>
        </S.ButtonBox>
      </S.ItemContainer>
    </S.ItemWrapper>
  );
}

export default EditHistory;
