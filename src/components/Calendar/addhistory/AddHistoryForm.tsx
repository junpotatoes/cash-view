import { useState } from 'react';
import SelectClass from './SelectClass';
import IncomeCategory from './IncomeCategory';
import ExpensesCategory from './ExpensesCategory';
import axios from 'axios';
import * as S from '../../../styles/historymodal/history.style';

function AddHistoryForm(): JSX.Element {
  const [classOption, setClassOption] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [content, setContent] = useState<string>('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!classOption || !category || !amount || !content) {
      window.alert('모든 항목을 작성해주세요.');
      return;
    }

    const reqbody = {
      value: classOption,
      category: category,
      amount: amount,
      content: content
    };

    axios
      .post('http://localhost:4000/history', reqbody, {})
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <S.ItemWrapper>
      <S.ItemContainer onSubmit={onSubmit}>
        <S.ItemBox>
          <span className="class">분류</span>
          <span className="select_class">
            <SelectClass setClassOption={setClassOption} />
          </span>
        </S.ItemBox>
        <S.ItemBox>
          <span>카테고리</span>
          <span>
            {classOption === '수입' ? (
              <IncomeCategory setCategory={setCategory} />
            ) : (
              <ExpensesCategory setCategory={setCategory} />
            )}
          </span>
        </S.ItemBox>
        <S.ItemBox>
          <span>금액</span>
          <input
            type={'number'}
            className="underline"
            value={amount || ''}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
          <span>원</span>
        </S.ItemBox>
        <S.ItemBox>
          <span>내용</span>
          <input
            type={'text'}
            className="underline"
            value={content}
            onChange={(event) => setContent(event.target.value)}
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
