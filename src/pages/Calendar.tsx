import CalendarHeader from '@/components/Calendar/Header/CalendarHeader';
import CalendarHistory from '@/components/Calendar/History/CalendarHistory';
import CalendarMain from '@/components/Calendar/Main/CalendarMain';
import * as S from '@/styles/Calendar/Calendar.style';
import Income from '@/components/Calendar/Amount/Income';
import Expenditure from '@/components/Calendar/Amount/Expenditure';
import { HistoryProps } from '@/components/Layout/Route';
import Total from '@/components/Calendar/Amount/Total';

function Calendar({ history }: HistoryProps) {
  return (
    <S.CalendarContainer>
      <div className="calendarTop">
        <div className="calendarBox">
          <CalendarHeader />
          <CalendarMain history={history} />
        </div>

        <div className="historyBox">
          <CalendarHistory history={history} />
        </div>
      </div>

      <div className="calendarBottom">
        <div className="leftBox">
          <Income history={history} />
          <Expenditure history={history} />
        </div>
        <div className="rightBox">
          <Total history={history} />
        </div>
      </div>
    </S.CalendarContainer>
  );
}

export default Calendar;
