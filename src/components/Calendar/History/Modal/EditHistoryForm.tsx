import { useState, useEffect } from 'react';
import axios from 'axios';
import IncomeCategory from './IncomeCategory';
import ExpensesCategory from './ExpensesCategory';
import SelectClass from './SelectClass';
import * as S from '../../../../styles/Calendar/Addhistory/AddHistory.style';
import { updateModalProps } from '../HistoryDetail';
import { useNavigate } from 'react-router-dom';

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

function EditHistoryForm({
  updateModal,
  setUpdateModal,
  id
}: updateModalProps) {
  const navigate = useNavigate();
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

  const clickEdit = () => {
    const reqbody = {
      value: formState.value,
      category: formState.category,
      amount: formState.amount,
      content: formState.content
    };

    try {
      axios.patch(`http://localhost:4000/historys/${id}`, reqbody);
      setUpdateModal(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.ItemWrapper>
      <S.ItemContainer onSubmit={clickEdit}>
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
              setFormState({ ...formState, amount: e.target.valueAsNumber })
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
            <button type="submit" className="save__Modal">
              저장
            </button>
            <button
              type="reset"
              className="close__Modal"
              onClick={() => setUpdateModal(false)}
            >
              취소
            </button>
          </div>
        </S.ButtonBox>
      </S.ItemContainer>
    </S.ItemWrapper>
  );
}

export default EditHistoryForm;
