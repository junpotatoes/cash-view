import BarChart from '../components/Chart/BarChart';
import ExpensesPieChart from '../components/Chart/ExpensesPieChart';
import IncomePieChart from '../components/Chart/IncomePieChart';
import styled from 'styled-components';
import { margin } from '@mui/system';

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartContainer = styled.div`
  width: 80%;
`;

const PieChartBox = styled.div`
  display: flex;
  justify-content: center;

  .pieBox {
    width: 100%;
    max-width: 300px;
  }
`;

const BarChartBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function Chart() {
  return (
    <ChartWrapper>
      <ChartContainer>
        <PieChartBox>
          <div className="pieBox">
            <IncomePieChart></IncomePieChart>
          </div>
          <div className="pieBox">
            <ExpensesPieChart></ExpensesPieChart>
          </div>
        </PieChartBox>
        <BarChartBox>
          <BarChart></BarChart>
        </BarChartBox>
      </ChartContainer>
    </ChartWrapper>
  );
}

export default Chart;
