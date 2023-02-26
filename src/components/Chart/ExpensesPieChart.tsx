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

function ExpensesPieChart({ history }: ChartHistoryProps) {
  //   const options = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top' as const
  //       }
  //     },
  //     type: 'pie'
  //   };

  //   const labels = [
  //     '식비',
  //     '교통비',
  //     '문화생활',
  //     '패션/미용',
  //     '주거/통신',
  //     '기타'
  //   ];
  //   const colors = [
  //     '#FAB5B5',
  //     '#FF7D7D',
  //     '#FABD92',
  //     '#FDDE8F',
  //     '#DD79B5',
  //     '#D4AEE1'
  //   ];
  //   const dataValues = [10, 20, 13, 29, 21, 10];
  //   const dataSum = dataValues.reduce((a, b) => a + b, 0);

  //   const data = {
  //     labels: labels.map(
  //       (label, index) =>
  //         `${label} (${Math.ceil((dataValues[index] / dataSum) * 100)}%)`
  //     ),
  //     datasets: [
  //       {
  //         data: dataValues,
  //         backgroundColor: colors,
  //         label: '지출 항목'
  //       }
  //     ]
  //   };

  //   return <Pie options={options} data={data} />;
  // }

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

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const labels = history
    .filter(
      (el) =>
        el.month === currentMonth &&
        el.year === currentYear &&
        el.value === '지출'
    )
    .map((el) => el.category);
  const colors = [
    '#FAB5B5',
    '#FF7D7D',
    '#FABD92',
    '#FDDE8F',
    '#DD79B5',
    '#D4AEE1'
  ];
  const dataValues = history
    .filter(
      (el) =>
        el.month === currentMonth &&
        el.year === currentYear &&
        el.value === '지출'
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
        label: '지출 항목'
      }
    ]
  };

  return <Pie options={options} data={data} />;
}

export default ExpensesPieChart;
