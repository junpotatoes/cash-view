import BarChart from '../components/Chart/BarChart';
import ExpensesPieChart from '../components/Chart/ExpensesPieChart';
import IncomePieChart from '../components/Chart/IncomePieChart';
import styled from 'styled-components';
import { margin } from '@mui/system';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ChartContainer = styled.div`
  width: 80%;
`;

const PieChartBox = styled.div`
  display: flex;
  justify-content: space-around;

  .pieBox {
    width: 100%;
    max-width: 330px;
  }
`;

const BarChartBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

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
      const res = await axios.get('http://localhost:4000/historys');
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
    <ChartWrapper>
      <ChartContainer>
        <PieChartBox>
          <div className="pieBox">
            <IncomePieChart history={history} />
          </div>
          <div className="pieBox">
            <ExpensesPieChart history={history} />
          </div>
        </PieChartBox>
        <BarChartBox>
          <BarChart />
        </BarChartBox>
      </ChartContainer>
    </ChartWrapper>
  );
}

export default Chart;
