import { useAppSelector } from '@/hooks/store';
import { HistoryProps } from '@/pages/Calendar';
import { ReactComponent as UpdateIcon } from '@/assets/Icon/updateIcon.svg';
import { ReactComponent as DeleteIcon } from '@/assets/Icon/deleteIcon.svg';
import { useState } from 'react';
import EditHistory from '@/components/Calendar/History/Modal/EditHistory';
import { baseAPI } from '@/api/customAxios';
import Alert from '@/components/Alert/Alert';

function HistoryMain({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);
  const [updateModal, setUpdateModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  const clickDelete = async (id?: number): Promise<void> => {
    try {
      await baseAPI.delete(`/historys/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const checkDetail = (year: number, month: number, date: number) => {
    return history.map(
      (el, idx) =>
        el.year === year &&
        el.month === month &&
        el.date === date && (
          <li key={idx} className="historyItem">
            <p className="category">{el.category}</p>
            <div className="detailContent">
              <p className="content">{el.content}</p>
              <strong
                className={`amount ${el.value === '수입' ? 'blue' : 'red'}`}
              >
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

              <EditHistory
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
        )
    );
  };

  return (
    <div className="mainBox">
      <h4 className="mainTitle">내역 상세</h4>

      {history.filter(
        (el) =>
          el.year === calendar.year &&
          el.month === calendar.month &&
          el.date === calendar.date
      )[0] ? (
        <ul className="historyList">
          {calendar.prevMonthDate
            ? checkDetail(
                calendar.month === 1 ? calendar.year - 1 : calendar.year,
                calendar.month === 1 ? 12 : calendar.month - 1,
                calendar.prevMonthDate
              )
            : calendar.nextMonthDate
            ? checkDetail(
                calendar.month === 12 ? calendar.year + 1 : calendar.year,
                calendar.month === 12 ? 1 : calendar.month + 1,
                calendar.nextMonthDate
              )
            : checkDetail(calendar.year, calendar.month, calendar.date)}
        </ul>
      ) : (
        <div className="noData">
          <p>데이터가 없습니다</p>
          <p>수입/지출 내역을 입력해주세요</p>
        </div>
      )}
    </div>
  );
}

export default HistoryMain;
