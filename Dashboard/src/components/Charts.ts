import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import type { ChartOptions, ChartData } from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// Type for chart data
type ChartDataType<T extends 'bar' | 'pie' | 'line'> = ChartData<T, number[], string>;

// Revenue Chart
export const RevenueChart: React.FC = () => {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  const data: ChartDataType<'bar'> = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [3000, 4000, 5200, 2200, 8500],
        backgroundColor: '#008080',
        borderRadius: 8,
      },
    ],
  };

  return React.createElement(Bar, { options, data });
};

// Booking Trends Chart
export const BookingTrendsChart: React.FC = () => {
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Bookings',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data: ChartDataType<'line'> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Bookings',
        data: [12, 19, 15, 21, 18, 25, 22],
        borderColor: '#008080',
        backgroundColor: '#007076',
        fill: true,
      },
    ],
  };

  return React.createElement(Line, { options, data });
};

// Vehicle Status Chart
export const VehicleStatusChart: React.FC = () => {
  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw as number;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  const data: ChartDataType<'pie'> = {
    labels: ['Rented', 'Available', 'Maintenance'],
    datasets: [
      {
        label: 'Vehicles',
        data: [48, 32, 5],
        backgroundColor: [
          '#008080',
          'rgba(16, 185, 200, 0.8)',
          '#ffA500',
        ],
        borderWidth: 1,
      },
    ],
  };

  return React.createElement(Pie, { options, data });
};

// Rental Duration Chart
export const RentalDurationChart: React.FC = () => {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data: ChartDataType<'bar'> = {
    labels: ['1-3 days', '4-7 days', '8-10 days', '10+ days'],
    datasets: [
      {
        label: 'Frequency of Rentals',
        data: [35, 28, 20, 17],
        backgroundColor: '#ffA500',
        borderRadius: 4,
      },
    ],
  };

  return React.createElement(Bar, { options, data });
};