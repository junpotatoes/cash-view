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
      label: '수입 항목'
    }
  ]
};

function IncomePieChart() {
  return <Pie options={options} data={data} />;
}

export default IncomePieChart;
