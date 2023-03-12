import BarChart from '@/components/Chart/BarChart';
import ExpensesPieChart from '@/components/Chart/ExpensesPieChart';
import IncomePieChart from '@/components/Chart/IncomePieChart';
import Header from '@/components/Calendar/Header/CalendarHeader';
import * as S from '@/styles/Chart/Chart.style';
import { HistoryProps } from '@/components/Layout/Route';

function Chart({ history }: HistoryProps) {
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
