import BarChart from '@/components/Chart/BarChart';
import ExpensesPieChart from '@/components/Chart/ExpensesPieChart';
import IncomePieChart from '@/components/Chart/IncomePieChart';
import { useEffect, useState } from 'react';
import Header from '@/components/Calendar/Header/CalendarHeader';
import { baseAPI } from '@/api/customAxios';
import * as S from '@/styles/Chart/Chart.style';

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

export interface ChartHistoryProps {
  history: History;
  setHistory?: React.Dispatch<React.SetStateAction<History>>;
}

function Chart() {
  const [history, setHistory] = useState<History>([]);

  const getHistory = async () => {
    try {
      const res = await baseAPI.get('/historys');
      setHistory(
        res.data.filter(
          (el: any) =>
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
    <S.ChartWrapper>
      <S.ChartContainer>
        <Header />

        {history.length > 0 ? (
          <>
            <S.PieChartBox>
              <div className="pieBox">
                <IncomePieChart history={history} />
              </div>
              <div className="pieBox">
                <ExpensesPieChart history={history} />
              </div>
            </S.PieChartBox>
            <S.BarChartConatainer>
              <S.BarChartBox>
                <BarChart history={history} />
              </S.BarChartBox>
            </S.BarChartConatainer>
          </>
        ) : (
          <S.NoDataBox>
            <p>데이터가 없습니다 수입/지출 내역을 입력해주세요.</p>
          </S.NoDataBox>
        )}
      </S.ChartContainer>
    </S.ChartWrapper>
  );
}

export default Chart;
