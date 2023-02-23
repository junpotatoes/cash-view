import { useAppSelector } from '../../../hooks/store';
import * as S from '../../../styles/Calendar/History/HistoryDate.style';

function HistoryDate() {
  const calendar = useAppSelector((state) => state.calendar);

  return (
    <S.HistoryDateContainer>
      <h3 className="date">
        {calendar.month}월 {calendar.date}일
      </h3>
    </S.HistoryDateContainer>
  );
}

export default HistoryDate;
