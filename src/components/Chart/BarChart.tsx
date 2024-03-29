import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { HistoryProps } from '@/components/Layout/Route';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ history }: HistoryProps) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    width: 820,
    height: 270,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: '연별 지출 차트'
      }
    }
  };

  const IncomeByMonth: any = {};

  history.forEach((item) => {
    const month = item.month;
    const amount = item.value === '수입' ? Number(item.amount) : 0;
    IncomeByMonth[month] = (IncomeByMonth[month] || 0) + amount;
  });

  const newIncomeByMonth: any = {};
  for (const key in IncomeByMonth) {
    newIncomeByMonth[key + '월'] = IncomeByMonth[key];
  }

  const ExpensesByMonth: any = {};
  history.forEach((item) => {
    const month = item.month;
    const amount = item.value === '지출' ? Number(item.amount) : 0;
    ExpensesByMonth[month] = (ExpensesByMonth[month] || 0) + amount;
  });

  const newExpensesByMonth: any = {};
  for (const key in IncomeByMonth) {
    newExpensesByMonth[key + '월'] = ExpensesByMonth[key];
  }

  const data = {
    datasets: [
      {
        label: '수입',
        data: newIncomeByMonth,
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      {
        label: '지출',
        data: newExpensesByMonth,
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;
