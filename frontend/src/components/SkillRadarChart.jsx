import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillRadarChart = ({ ratings }) => {
  const data = {
    labels: Object.keys(ratings), // e.g., ['DSA', 'Web Dev', ...]
    datasets: [
      {
        label: 'Skill Level',
        data: Object.values(ratings), // e.g., [4.8, 4.2, ...]
        backgroundColor: 'rgba(162, 213, 198, 0.2)', // Faint theme color fill
        borderColor: '#a2d5c6', // Your main theme color
        borderWidth: 2,
        pointBackgroundColor: '#a2d5c6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#a2d5c6',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)', // Lines from center to labels
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Concentric circle grid lines
        },
        pointLabels: {
          color: '#e0e0e0', // Skill labels (DSA, Web Dev, etc.)
          font: {
            size: 14,
          },
        },
        ticks: {
          color: '#a2d5c6', // Numbers on the scale (1, 2, 3, 4, 5)
          backdropColor: 'transparent',
          stepSize: 1, // Show ticks for 1, 2, 3, 4, 5
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    plugins: {
      legend: {
        display: false, // We can hide the legend as it's self-explanatory
      },
    },
  };

  return <div style={{ height: '400px' }}><Radar data={data} options={options} /></div>;
};

export default SkillRadarChart;