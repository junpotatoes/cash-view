import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/store';
import * as S from '../../../styles/Calendar/History/HistoryDetail.style';
import { HistroyProps } from './CalendarHistory';
import HistoryDate from './HistoryDate';

function HistoryDetail({ history }: HistroyProps) {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <S.HistoryDetailContainer>
      <div className="headerBox">
        <HistoryDate />
        <div className="infoBox">
          <strong className="blue">
            수입{' '}
            {history
              .filter(
                (el) =>
                  el.value === '수입' &&
                  el.year === calendar.year &&
                  el.month === calendar.month &&
                  el.date === calendar.date
              )
              .map((el) => el.amount)
              .reduce((acc, cur) => {
                return acc + cur;
              }, 0)
              .toLocaleString('ko-KR')}
          </strong>
          <strong className="red">
            지출{' '}
            {history
              .filter(
                (el) =>
                  el.value === '지출' &&
                  el.year === calendar.year &&
                  el.month === calendar.month &&
                  el.date === calendar.date
              )
              .map((el) => el.amount)
              .reduce((acc, cur) => {
                return acc + cur;
              }, 0)
              .toLocaleString('ko-KR')}
          </strong>
        </div>
      </div>

      <div className="mainBox">
        <h4 className="mainTitle">내역 상세</h4>
        <ul className="historyList">
          {history.map(
            (el, idx) =>
              el.year === calendar.year &&
              el.month === calendar.month &&
              el.date === calendar.date && (
                <li key={idx} className="historyItem">
                  <p className="category">{el.category}</p>
                  <div className="detailContent">
                    <p className="content">{el.content}</p>
                    <strong
                      className={`amount ${
                        el.value === '수입' ? 'blue' : 'red'
                      }`}
                    >
                      {el.amount.toLocaleString('ko-KR')}
                    </strong>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </S.HistoryDetailContainer>
  );
}

export default HistoryDetail;
