import { useAppSelector } from '../../../hooks/store';
import { HistoryProps } from '../../../pages/Calendar';
import { ReactComponent as UpdateIcon } from '../../../assets/Icon/updateIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/Icon/deleteIcon.svg';
import { useState } from 'react';
import EditHistory from '../History/Modal/EditHistory';
import { baseAPI } from '../../../api/customAxios';

function HistoryMain({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);
  const [updateModal, setUpdateModal] = useState(false);

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
              <button type="button" onClick={() => clickDelete(el.id)}>
                <DeleteIcon />
              </button>

              <EditHistory
                updateModal={updateModal}
                setUpdateModal={setUpdateModal}
                id={el.id}
              />
            </div>
          </li>
        )
    );
  };

  const clickDelete = (id: number): void => {
    const isDelete = window.confirm('삭제하시겠습니끼?');

    try {
      isDelete && baseAPI.delete(`/historys/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainBox">
      <h4 className="mainTitle">내역 상세</h4>

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
    </div>
  );
}

export default HistoryMain;
