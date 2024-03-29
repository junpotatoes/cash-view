import { HistoryProps } from '@/components/Layout/Route';
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

interface Expense {
  month: number;
  year: number;
  value: string;
  category: string;
  amount: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    label: string;
  }[];
}

function ExpensesPieChart({ history }: HistoryProps) {
  const calendar = useAppSelector((state) => state.calendar);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    },
    type: 'pie' as const
  };

  const currentMonth: number = calendar.month;
  const currentYear: number = calendar.year;

  const labels: string[] = history
    .filter(
      (el: Expense) =>
        el.month === currentMonth &&
        el.year === currentYear &&
        el.value === '지출'
    )
    .map((el: Expense) => el.category);
  const colors: string[] = [
    '#FAB5B5',
    '#FF7D7D',
    '#FABD92',
    '#FDDE8F',
    '#DD79B5',
    '#D4AEE1'
  ];
  const dataValues: number[] = history
    .filter(
      (el: Expense) =>
        el.month === currentMonth &&
        el.year === currentYear &&
        el.value === '지출'
    )
    .map((el: Expense) => el.amount);
  const dataSum: number = dataValues.reduce((a, b) => a + b, 0);

  const data: ChartData = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: colors,
        label: '지출 항목'
      }
    ]
  };

  const labelsWithDataValues: Record<string, number> = labels.reduce(
    (acc: Record<string, number>, label: string, index: number) => {
      if (acc[label]) {
        acc[label] += dataValues[index];
      } else {
        acc[label] = dataValues[index];
      }
      return acc;
    },
    {}
  );

  for (const [label, value] of Object.entries(labelsWithDataValues)) {
    data.labels.push(`${label} (${Math.ceil((value / dataSum) * 100)}%)`);
    data.datasets[0].data.push(value);
  }

  return (
    <>
      {dataValues.length > 0 ? (
        <Pie options={options} data={data} />
      ) : (
        <S.NoIncomeDataBox>
          <p>
            데이터가 없습니다
            <br />
            지출 내역을 입력해주세요.
          </p>
        </S.NoIncomeDataBox>
      )}
    </>
  );
}

export default ExpensesPieChart;
