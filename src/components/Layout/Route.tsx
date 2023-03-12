import { Routes, Route } from 'react-router-dom';
import Calendar from '@/pages/Calendar';
import Chart from '@/pages/Chart';
import Sign from '@/pages/Sign';
import Setting from '@/pages/Setting';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { useEffect, useState } from 'react';
import { baseAPI } from '@/api/customAxios';
import { onToggle } from '@/store/historySlice';

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

function Router() {
  const get = useAppSelector((state) => state.history);
  const dispatch = useAppDispatch();
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
      dispatch(onToggle(false));
    } catch {}
  };

  useEffect(() => {
    get && getHistory();
  }, [get]);

  return (
    <Routes>
      <Route path="/*" element={<Sign />} />
      <Route path="/calendar" element={<Calendar history={history} />} />
      <Route path="/statistics" element={<Chart history={history} />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default Router;
