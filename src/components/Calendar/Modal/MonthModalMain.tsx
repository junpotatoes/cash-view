import { useAppDispatch } from '@/hooks/store';
import { changeMonth } from '@/store/calendarSlice';
import * as S from '@/styles/Calendar/Modal/MonthModalMain.style';
import { CalendarModal } from '@/components/Calendar/Header/CalendarHeader';

function MonthModalMain({ setIsOpenCalendar }: CalendarModal) {
  const dispatch = useAppDispatch();

  const ClickMonth = (idx: number): void => {
    dispatch(changeMonth({ month: idx + 1 }));
    setIsOpenCalendar(false);
  };

  return (
    <S.MonthModalMainContainer>
      {Array(12)
        .fill(1)
        .map((el, idx) => (
          <li key={idx} className="month" onClick={() => ClickMonth(idx)}>
            {idx + 1}월
          </li>
        ))}
    </S.MonthModalMainContainer>
  );
}

export default MonthModalMain;
