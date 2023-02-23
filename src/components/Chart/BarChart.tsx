import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
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
    },
    title: {
      display: true,
      text: '월별 지출 차트'
    }
  }
};

const labels = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월'
];

const data = {
  labels,
  datasets: [
    {
      label: '수입',
      data: [12, 19, 3, 5, 2, 3, 2, 4, 5, 6, 10, 8],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
      label: '지출',
      data: [12, 19, 3, 5, 2, 3, 2, 4, 5, 6, 5, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
