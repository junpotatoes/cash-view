import { useState } from 'react';
import { ReactComponent as UpdateIcon } from '@/assets/Icon/updateIcon.svg';
import { ReactComponent as DeleteIcon } from '@/assets/Icon/deleteIcon.svg';
import EditHistoryForm from '@/components/Calendar/History/Modal/EditHistoryForm';
import Alert from '@/components/Alert/Alert';
import { baseAPI } from '@/api/customAxios';
import { useAppDispatch } from '@/hooks/store';
import { onToggle } from '@/store/historySlice';
import { History } from '@/components/Layout/Route';

interface HistoryItemProps {
  el: History;
}

function HistoryItem({ el }: HistoryItemProps) {
  const dispatch = useAppDispatch();
  const [updateModal, setUpdateModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  const clickDelete = async (id?: number): Promise<void> => {
    try {
      await baseAPI.delete(`/historys/${id}`);
      dispatch(onToggle(true));
    } catch {}
  };

  return (
    <li key={el.id} className="historyItem">
      <p className="category">{el.category}</p>
      <div className="detailContent">
        <p className="content">{el.content}</p>
        <strong className={`amount ${el.value === '수입' ? 'blue' : 'red'}`}>
          {el.amount.toLocaleString('ko-KR')}
        </strong>
      </div>
      <div className="updateBox">
        <button type="button" onClick={() => setUpdateModal(true)}>
          <UpdateIcon />
        </button>
        <button type="button" onClick={() => setAlertModal(true)}>
          <DeleteIcon />
        </button>

        <EditHistoryForm
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
          id={el.id}
        />

        <Alert
          message="내역을 삭제하시겠습니까?"
          trueText="삭제"
          falseText="취소"
          alertModal={alertModal}
          setAlertModal={setAlertModal}
          propsFunction={() => clickDelete(el.id)}
        />
      </div>
    </li>
  );
}

export default HistoryItem;
