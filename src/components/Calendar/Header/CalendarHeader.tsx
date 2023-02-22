import { Dispatch, SetStateAction, useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../assets/Icon/arrowIcon.svg';
import * as S from '../../../styles/Calendar/Header/CalendarHeader.style';
import CalendarModalButton from '../Modal/ModalButton';
import CalendarDateModal from '../Modal/Date/DateModal';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { prevMonth, nextMonth } from '../../../store/calendarSlice';

export interface CalendarModal {
  isOpenCalender: boolean;
  setIsOpenCalendar: Dispatch<SetStateAction<boolean>>;
}

function Header() {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();
  const [isOpenCalender, setIsOpenCalendar] = useState(false);

  return (
    <S.CalendarHeaderContainer px={24}>
      <S.PrevButton type="button" px={24} onClick={() => dispatch(prevMonth())}>
        <ArrowIcon className="prevIcon" />
      </S.PrevButton>
      <div className="calendarDateBox">
        <strong>
          {calendar.year}년 {calendar.month}월
        </strong>
        <CalendarModalButton
          isOpenCalender={isOpenCalender}
          setIsOpenCalendar={setIsOpenCalendar}
        />
        <CalendarDateModal
          isOpenCalender={isOpenCalender}
          setIsOpenCalendar={setIsOpenCalendar}
        />
      </div>
      <S.NextButton type="button" px={24} onClick={() => dispatch(nextMonth())}>
        <ArrowIcon className="nextIcon" />
      </S.NextButton>
    </S.CalendarHeaderContainer>
  );
}

export default Header;
