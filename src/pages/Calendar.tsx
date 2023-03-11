import CalendarHeader from '@/components/Calendar/Header/CalendarHeader';
import CalendarHistory from '@/components/Calendar/History/CalendarHistory';
import CalendarMain from '@/components/Calendar/Main/CalendarMain';
import * as S from '@/styles/Calendar/Calendar.style';
import { useEffect, useState } from 'react';
import { baseAPI } from '@/api/customAxios';
import Income from '@/components/Calendar/Amount/Income';
import Expenditure from '@/components/Calendar/Amount/ Expenditure';

export interface History {
  id: number;
  userId: number;
  year: number;
  month: number;
  date: number;
  value: string;
  category: string;
  amount: number;
  content: string;
}

export interface HistoryProps {
  history: History[];
}

function Calendar() {
  const [history, setHistory] = useState<History[]>([]);

  const getHistory = async () => {
    try {
      const res = await baseAPI.get('/historys');
      setHistory(
        res.data.filter(
          (el: History) =>
            el.userId ===
            (localStorage.user ? JSON.parse(localStorage.user).userId : 0)
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

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
        <Income history={history} />
        <Expenditure history={history} />
      </div>
    </S.CalendarContainer>
  );
}

export default Calendar;
