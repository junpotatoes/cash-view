import { useAppSelector } from '../../../hooks/store';
import * as S from '../../../styles/Calendar/History/HistoryDate.style';

function HistoryDate() {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <S.HistoryDateContainer>
      <h3 className="date">
        {calendar.prevMonthDate
          ? `${calendar.month - 1}월 ${calendar.prevMonthDate}일`
          : calendar.nextMonthDate
          ? `${calendar.month + 1}월 ${calendar.nextMonthDate}일`
          : `${calendar.month}월 ${calendar.date}일`}
      </h3>
    </S.HistoryDateContainer>
  );
}

export default HistoryDate;
