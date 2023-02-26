import React from 'react';
import { ChartHistoryProps } from '../../pages/Chart';

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

function IncomePieChart({ history }: ChartHistoryProps) {
  const checkTotal = (
    value: string,
    year: number,
    month: number,
    date: number
  ): number => {
    return history
      .filter(
        (el) =>
          el.value === value &&
          el.year === year &&
          el.month === month &&
          el.date === date
      )
      .map((el) => el.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      }
    },
    type: 'pie'
  };

  const labels = history.map((el) => el.category);
  const colors = [
    '#B4B2FF',
    '#DEDDFF',
    '#6D6AFA',
    '#A2EDFD',
    '#C270DF',
    '#2E9BFF'
  ];
  const dataValues = history.map((el) => el.amount);
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

  return <Pie options={options} data={data} />;
}

export default IncomePieChart;
