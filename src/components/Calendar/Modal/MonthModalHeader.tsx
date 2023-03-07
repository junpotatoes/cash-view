import * as S from '@/styles/Calendar/Header/CalendarHeader.style';
import { ReactComponent as ArrowIcon } from '@/assets/Icon/arrowIcon.svg';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { nextYear, prevYear } from '@/store/calendarSlice';

function MonthModalHeader() {
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();

  return (
    <S.CalendarHeaderContainer px={16}>
      <S.PrevButton px={16} onClick={() => dispatch(prevYear())}>
        <ArrowIcon />
      </S.PrevButton>
      <div className="calendarDateBox">
        <strong>{calendar.year}년</strong>
      </div>
      <S.NextButton px={16} onClick={() => dispatch(nextYear())}>
        <ArrowIcon />
      </S.NextButton>
    </S.CalendarHeaderContainer>
  );
}

export default MonthModalHeader;
