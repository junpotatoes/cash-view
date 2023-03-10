import { ChartHistoryProps } from '@/pages/Chart';
import * as S from '@/styles/Chart/Chart.style';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useAppSelector } from '@/hooks/store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  Tooltip,
  Legend
);

function IncomePieChart({ history }: ChartHistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    },
    type: 'pie'
  };

  const currentMonth = calendar.month;
  const currentYear = calendar.year;

  const labels = history
    .filter(
      (el) =>
        el.month === currentMonth &&
        el.year === currentYear &&
        el.value === '수입'
    )
    .map((el) => el.category);
  const colors = [
    '#B4B2FF',
    '#DEDDFF',
    '#6D6AFA',
    '#A2EDFD',
    '#C270DF',
    '#2E9BFF'
  ];
  const dataValues = history
    .filter(
      (el) =>
        el.month === currentMonth &&
        el.year === currentYear &&
        el.value === '수입'
    )
    .map((el) => el.amount);
  const dataSum = dataValues.reduce((a, b) => a + b, 0);

  const data = {
    labels: labels.map(
      (label, index) =>
        `${label} (${Math.ceil((dataValues[index] / dataSum) * 100)}%)`
    ),
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors,
        label: '수입 항목'
      }
    ]
  };

  return (
    <>
      {dataValues.length > 0 ? (
        <Pie options={options} data={data} />
      ) : (
        <S.NoIncomeDataBox>
          <p>데이터가 없습니다 수입 내역을 입력해주세요.</p>
        </S.NoIncomeDataBox>
      )}
    </>
  );
}

export default IncomePieChart;
