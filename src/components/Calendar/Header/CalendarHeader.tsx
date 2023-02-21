import { ReactComponent as ArrowIcon } from '../../../assets/Icon/arrowIcon.svg';
import * as S from '../../../styles/Calendar/Header/CalendarHeader.style';
import { Props } from '../../../pages/Calendar';
import { Dispatch, SetStateAction, useState } from 'react';
import CalendarModalButton from '../Modal/CalendarModalButton';
import CalendarDateModal from '../Modal/CalendarDateModal';

export interface CalendarModal {
  isOpenCalender: boolean;
  setIsOpenCalendar: Dispatch<SetStateAction<boolean>>;
}

function Header({ calendar, setCalendar, setIsOpenMobileCalendar }: Props) {
  const [isOpenCalender, setIsOpenCalendar] = useState(false);
  const prevMonth = () => {
    if (calendar.month === 1) {
      setCalendar({
        ...calendar,
        year: calendar.year - 1,
        month: 12,
        date: 1,
        prevDate: 0,
        nextDate: 0
      });
    } else {
      setCalendar({
        ...calendar,
        month: calendar.month - 1,
        date: 1,
        prevDate: 0,
        nextDate: 0
      });
    }

    setIsOpenMobileCalendar(false);
  };

  const nextMonth = () => {
    if (calendar.month === 12) {
      setCalendar({
        ...calendar,
        year: calendar.year + 1,
        month: 1,
        date: 1,
        prevDate: 0,
        nextDate: 0
      });
    } else {
      setCalendar({
        ...calendar,
        month: calendar.month + 1,
        date: 1,
        prevDate: 0,
        nextDate: 0
      });
    }

    setIsOpenMobileCalendar(false);
  };

  return (
    <S.CalendarHeaderContainer>
      <S.PrevButton type="button" onClick={prevMonth}>
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
      <S.NextButton type="button" onClick={nextMonth}>
        <ArrowIcon className="nextIcon" />
      </S.NextButton>
    </S.CalendarHeaderContainer>
  );
}

export default Header;
