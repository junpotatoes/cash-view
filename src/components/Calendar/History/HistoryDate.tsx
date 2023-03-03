import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/store';
import * as S from '../../../styles/Calendar/History/HistoryDate.style';

function HistoryDate() {
  const calendar = useAppSelector((state) => state.calendar);
  const [dateValue, setDateValue] = useState('');

  const checkCalendar = () => {
    if (calendar.prevMonthDate) {
      if (calendar.month === 1) {
        setDateValue(`12월-${calendar.prevMonthDate}일`);
      } else {
        setDateValue(`${calendar.month - 1}월 ${calendar.prevMonthDate}일`);
      }
    } else if (calendar.nextMonthDate) {
      if (calendar.month === 12) {
        setDateValue(`1월-${calendar.nextMonthDate}일`);
      } else {
        setDateValue(`${calendar.month + 1}월 ${calendar.nextMonthDate}일`);
      }
    } else {
      setDateValue(`${calendar.month}월 ${calendar.date}일`);
    }
  };

  useEffect(() => {
    checkCalendar();
  }, [calendar]);

  return (
    <S.HistoryDateContainer>
      <h3 className="date">{dateValue}</h3>
    </S.HistoryDateContainer>
  );
}

export default HistoryDate;
