import * as S from '../../../styles/Calendar/Header/CalendarHeader.style';
import { ReactComponent as ArrowIcon } from '../../../assets/Icon/arrowIcon.svg';
import { useAppSelector } from '../../../hooks/store';

function MonthModalHeader() {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <S.CalendarHeaderContainer px={16}>
      <S.PrevButton px={16}>
        <ArrowIcon />
      </S.PrevButton>
      <div className="calendarDateBox">
        <strong>{calendar.year}년</strong>
      </div>
      <S.NextButton px={16}>
        <ArrowIcon />
      </S.NextButton>
    </S.CalendarHeaderContainer>
  );
}

export default MonthModalHeader;
