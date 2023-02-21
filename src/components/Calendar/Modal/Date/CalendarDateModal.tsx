import { CalendarModal } from '../../Header/CalendarHeader';
import * as S from '../../../../styles/Calendar/Modal/CalendarDateModal.style';
import CalendarDay from '../../Main/CalendarDay';
import { useState } from 'react';

function CalendarDateModal({
  isOpenCalender,
  setIsOpenCalendar
}: CalendarModal) {
  const [calendar, setCalendar] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    prevDate: 0,
    nextDate: 0
  });

  return (
    <S.CalendarDateModalContainer isOpenCalendar={isOpenCalender}>
      <CalendarDay />
    </S.CalendarDateModalContainer>
  );
}

export default CalendarDateModal;
