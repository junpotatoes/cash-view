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

const labels = ['월급', '부수입', '용돈', '상여금', '금융소득', '기타'];

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
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: colors,
      label: 'My dataset'
    }
  ]
};

function IncomePieChart() {
  return <Pie options={options} data={data} />;
}

export default IncomePieChart;
