import HistoryComparison from './HistoryComparison';
import HistoryDetail from './HistoryDetail';
import * as S from '../../../styles/Calendar/History/CalendarHistory.style';
import { useEffect, useState } from 'react';
import axios from 'axios';

type History = {
  id: number;
  userId: number;
  year: number;
  month: number;
  date: number;
  value: string;
  category: string;
  amount: number;
  content: string;
}[];

export interface HistroyProps {
  history: History;
  setHistory?: React.Dispatch<React.SetStateAction<History>>;
}

function CalendarHistory() {
  const [history, setHistory] = useState<History>([]);

  const getHistory = async () => {
    try {
      const res = await axios.get('http://localhost:4000/historys');
      setHistory(
        res.data.filter(
          (el: any) => el.userId === JSON.parse(localStorage.user).userId
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
    <S.CalendarHistoryContainer>
      <HistoryDetail history={history} />
      <HistoryComparison history={history} />
      <button type="button" className="addHistoryButton">
        +
      </button>
    </S.CalendarHistoryContainer>
  );
}

export default CalendarHistory;
