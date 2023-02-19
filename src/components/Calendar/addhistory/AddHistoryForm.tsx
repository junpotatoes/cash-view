import { useState } from 'react';
import styled from 'styled-components';
import SelectClass from './SelectClass';
import IncomeCategory from './IncomeCategory';
import ExpensesCategory from './ExpensesCategory';
import axios from 'axios';

const ItemWrapper = styled.div`
  height: 180px;
`;

const ItemContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  line-height: 60px;
  padding-left: 10px;
  font-size: 17px;
`;

const ItemBox = styled.div`
  width: 100%;
  height: 35px;

  span {
    margin-right: 10px;
  }

  .select_class {
    margin-left: 29px;
  }

  .underline {
    width: 60%;
    height: 20px;
    margin-left: 29px;
    border: none;
    border-bottom: 1px solid black;
  }
  .category {
    width: 60%;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .option {
    display: flex;
    justify-content: space-around;
    width: 45%;
    height: 40px;
    font-size: 30px;
    margin-top: 30px;

    .save__Modal {
      width: 65px;
      height: 45px;
      background-color: ${(props) => props.theme.gray};
      border: 1px solid ${(props) => props.theme.black};
      border-radius: 5px;
    }

    .close__Modal {
      width: 65px;
      height: 45px;
      background-color: ${(props) => props.theme.gray};
      border: 1px solid ${(props) => props.theme.black};
      border-radius: 5px;
    }
  }
`;

function AddHistoryForm(): JSX.Element {
  const [classOption, setClassOption] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [content, setContent] = useState<string>('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    <ItemWrapper>
      <ItemContainer onSubmit={onSubmit}>
        <ItemBox>
          <span className="class">분류</span>
          <span className="select_class">
            <SelectClass setClassOption={setClassOption} />
          </span>
        </ItemBox>
        <ItemBox>
          <span>카테고리</span>
          <span>
            {classOption === '수입' ? (
              <IncomeCategory setCategory={setCategory} />
            ) : (
              <ExpensesCategory setCategory={setCategory} />
            )}
          </span>
        </ItemBox>
        <ItemBox>
          <span>금액</span>
          <input
            type={'number'}
            className="underline"
            value={amount || ''}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
          <span>원</span>
        </ItemBox>
        <ItemBox>
          <span>내용</span>
          <input
            type={'text'}
            className="underline"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </ItemBox>
        <ButtonBox>
          <div className="option">
            <button type="submit" className="save__Modal">
              저장
            </button>
            <button type="submit" className="close__Modal">
              취소
            </button>
          </div>
        </ButtonBox>
      </ItemContainer>
    </ItemWrapper>
  );
}

export default AddHistoryForm;
