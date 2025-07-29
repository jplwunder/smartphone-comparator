import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { ratingsKeytoName } from "../data/phoneData";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: { [key: string]: number };
}

const RadarChart = ({ data }: RadarChartProps) => {
  const chartData = {
    labels: Object.keys(data).map(
      (key) => ratingsKeytoName[key as keyof typeof ratingsKeytoName] || key
    ),
    datasets: [
      {
        label: "Pontuação",
        data: Object.values(data),
        backgroundColor: "rgba(230, 164, 122, 0.2)",
        borderColor: "rgba(191, 114, 69, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(191, 114, 69, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(191, 114, 69, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: "rgba(0, 0, 0, 0.1)" },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
        pointLabels: { font: { size: 12 }, color: "#4B4B4B" },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          backdropColor: "rgba(253, 251, 248, 1)",
          color: "#9ca3af",
          stepSize: 2,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Radar data={chartData} options={chartOptions} />;
};

export default RadarChart;
