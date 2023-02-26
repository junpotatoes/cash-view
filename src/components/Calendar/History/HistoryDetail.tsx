import { useAppSelector } from '../../../hooks/store';
import { HistoryProps } from '../../../pages/Calendar';
import * as S from '../../../styles/Calendar/History/HistoryDetail.style';
import HistoryDate from './HistoryDate';
import { ReactComponent as UpdateIcon } from '../../../assets/Icon/updateIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/Icon/deleteIcon.svg';
import EditHistory from './Modal/EditHistory';
import { useState } from 'react';
import axios from 'axios';

export interface updateModalProps {
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

function HistoryDetail({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);
  const [updateModal, setUpdateModal] = useState(false);

  const checkTotal = (
    value: string,
    year: number,
    month: number,
    date: number
  ): number => {
    return history
      .filter(
        (el) =>
          el.value === value &&
          el.year === year &&
          el.month === month &&
          el.date === date
      )
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

  const clickDelete = (id: number): void => {
    const isDelete = window.confirm('삭제하시겠습니끼?');

    try {
      isDelete && axios.delete(`http://localhost:4000/historys/${id}`);
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

  return (
    <S.HistoryDetailContainer>
      <div className="headerBox">
        <HistoryDate />
        <div className="infoBox">
          <strong className="blue">
            수입{' '}
            {calendar.prevMonthDate
              ? checkTotal(
                  '수입',
                  calendar.month === 1 ? calendar.year - 1 : calendar.year,
                  calendar.month === 1 ? 12 : calendar.month - 1,
                  calendar.prevMonthDate
                ).toLocaleString('ko-KR')
              : calendar.nextMonthDate
              ? checkTotal(
                  '수입',
                  calendar.month === 12 ? calendar.year + 1 : calendar.year,
                  calendar.month === 12 ? 1 : calendar.month + 1,
                  calendar.date
                ).toLocaleString('ko-KR')
              : checkTotal(
                  '수입',
                  calendar.year,
                  calendar.month,
                  calendar.date
                ).toLocaleString('ko-KR')}
          </strong>
          <strong className="red">
            지출{' '}
            {calendar.prevMonthDate
              ? checkTotal(
                  '지출',
                  calendar.month === 1 ? calendar.year - 1 : calendar.year,
                  calendar.month === 1 ? 12 : calendar.month - 1,
                  calendar.prevMonthDate
                ).toLocaleString('ko-KR')
              : calendar.nextMonthDate
              ? checkTotal(
                  '지출',
                  calendar.month === 12 ? calendar.year + 1 : calendar.year,
                  calendar.month === 12 ? 1 : calendar.month + 1,
                  calendar.nextMonthDate
                ).toLocaleString('ko-KR')
              : checkTotal(
                  '지출',
                  calendar.year,
                  calendar.month,
                  calendar.date
                ).toLocaleString('ko-KR')}
          </strong>
        </div>
      </div>

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
    </S.HistoryDetailContainer>
  );
}

export default HistoryDetail;
