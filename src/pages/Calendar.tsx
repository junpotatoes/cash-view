import CalendarHeader from '../components/Calendar/Header/CalendarHeader';
import CalendarHistory from '../components/Calendar/History/CalendarHistory';
import CalendarMain from '../components/Calendar/Main/CalendarMain';
import * as S from '../styles/Calendar/Calendar.style';

function Calendar(): JSX.Element {
  return (
    <S.CalendarContainer>
      <div className="calendarBox">
        <CalendarHeader />
        <CalendarMain />
      </div>

      <div className="historyBox">
        <CalendarHistory />
      </div>
    </S.CalendarContainer>
  );
}

export default Calendar;
