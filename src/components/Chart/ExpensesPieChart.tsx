import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  },
  type: 'pie'
};

const labels = ['식비', '교통비', '문화생활', '패션/미용', '주거/통신', '기타'];
const colors = [
  '#FAB5B5',
  '#FF7D7D',
  '#FABD92',
  '#FDDE8F',
  '#DD79B5',
  '#D4AEE1'
];
const dataValues = [10, 20, 13, 29, 21, 10];
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
      label: '지출 항목'
    }
  ]
};

function ExpensesPieChart() {
  return <Pie options={options} data={data} />;
}

export default ExpensesPieChart;
