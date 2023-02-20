import { Dispatch, SetStateAction } from 'react';
import { ReactComponent as ArrowIcon } from '../../../assets/Icon/arrowIcon.svg';
import * as S from '../../../styles/calendar/Header/index.style';

interface Props {
  currentYear: number;
  currentMonth: number;
  setCurrentYear: Dispatch<SetStateAction<number>>;
  setCurrentMonth: Dispatch<SetStateAction<number>>;
}

function CalendarHeader({
  currentYear,
  currentMonth,
  setCurrentYear,
  setCurrentMonth
}: Props) {
  const prevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <S.CalendarHeaderContainer>
      <button type="button" className="prev" onClick={prevMonth}>
        <ArrowIcon />
      </button>
      <button type="button" className="next" onClick={nextMonth}>
        <ArrowIcon />
      </button>
    </S.CalendarHeaderContainer>
  );
}

export default CalendarHeader;
