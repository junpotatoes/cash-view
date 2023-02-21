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
  width: 820,
  height: 270,
  plugins: {
    legend: {
      position: 'top' as const
    }
  },
  type: 'pie'
};

const labels = [
  '식비',
  '교통비',
  '문화생활',
  '패션/미용',
  '생활용품',
  '주거/통신',
  '기타'
];

const colors = [
  '#B4B2FF',
  '#DEDDFF',
  '#6D6AFA',
  '#A2EDFD',
  '#C270DF',
  '#2E9BFF'
];

const data = {
  labels,

  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3, 5],
      backgroundColor: colors,
      label: 'My dataset'
    }
  ]
};

function ExpensesPieChart() {
  return <Pie options={options} data={data} />;
}

export default ExpensesPieChart;
