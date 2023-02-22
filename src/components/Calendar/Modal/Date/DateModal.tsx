import { CalendarModal } from '../../Header/CalendarHeader';
import * as S from '../../../../styles/Calendar/Modal/Date/DateModal.style';
import CalendarDay from '../../Main/CalendarDay';
import { useState } from 'react';
import ModalDate from './ModalDate';
import DateModalHeader from './DateModalHeader';

function DateModal({ isOpenCalender, setIsOpenCalendar }: CalendarModal) {
  const [calendar, setCalendar] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    prevDate: 0,
    nextDate: 0
  });

  return (
    <S.CalendarDateModalContainer isOpenCalendar={isOpenCalender}>
      <DateModalHeader />

      <CalendarDay />

      <ModalDate />
    </S.CalendarDateModalContainer>
  );
}

export default DateModal;
