import { useState } from 'react';
import SelectClass from './SelectClass';
import IncomeCategory from './IncomeCategory';
import ExpensesCategory from './ExpensesCategory';
import axios from 'axios';
import * as S from '../../../styles/historymodal/history.style';

interface FormState {
  classOption: string;
  category: string;
  amount: number | undefined;
  content: string;
}

function AddHistoryForm(): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    classOption: '',
    category: '',
    amount: undefined,
    content: ''
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const reqbody = {
      value: formState.classOption,
      category: formState.category,
      amount: formState.amount,
      content: formState.content
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

    axios
      .post('http://localhost:4000/history', reqbody, {})
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <S.ItemWrapper>
      <S.ItemContainer onSubmit={onSubmit}>
        <S.ItemBox>
          <span className="class">분류</span>
          <span className="select_class">
            <SelectClass
              setClassOption={(value) =>
                setFormState({ ...formState, classOption: value })
              }
            />
          </span>
        </S.ItemBox>
        <S.ItemBox>
          <span>카테고리</span>
          <span>
            {formState.classOption === '수입' ? (
              <IncomeCategory
                setCategory={(category) =>
                  setFormState({ ...formState, category: category })
                }
              />
            ) : (
              <ExpensesCategory
                setCategory={(category) =>
                  setFormState({ ...formState, category: category })
                }
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

export default AddHistoryForm;
