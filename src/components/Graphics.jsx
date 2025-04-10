import React from "react";
import { Line } from "react-chartjs-2";
import { Card, Typography } from "antd";
import 'antd/dist/reset.css';

import {
    Chart as ChartJS,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale, Filler, Tooltip, Legend);

const { Text } = Typography;

function GraphicsBase({ data, dataKey, label, unit, color }) {
    const currentTime = new Date();
    const timeLabels = Array.from({ length: 7 }).map((_, i) => {
        const time = new Date(currentTime.getTime() - (5 - i) * 60 * 60 * 1000);
        return `${time.getHours()}:00`;
    });

    const chartData = {
        labels: timeLabels,
        datasets: [
            {
                label: label,
                data: data.map((d) => d[dataKey]),
                borderColor: color,
                backgroundColor: `${color}33`,
                fill: true,
                tension: 0.4,
                pointRadius: 3,
                pointBackgroundColor: color,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.raw} ${unit}`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#666",
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "#ddd",
                },
                ticks: {
                    color: "#666",
                },
            },
        },
    };

    return (
        <Card
            style={{ width: "300px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", margin: "10px" }}
            bodyStyle={{ padding: "20px", textAlign: "center" }}
        >
            <Text strong style={{ fontSize: "16px", display: "block", marginBottom: "5px", color }}>
                {label}
            </Text>
            <Text style={{ fontSize: "14px", display: "block", marginBottom: "10px", fontWeight: "bold" }}>
                {data[data.length - 1][dataKey]} {unit}
            </Text>
            <div style={{ width: "100%", height: "250px" }}>
                <Line data={chartData} options={chartOptions} />
            </div>
        </Card>
    );
}

export const TemperatureGraphics = ({ data }) => (
    <GraphicsBase data={data} dataKey="temperature" label="Температура (°C)" unit="°C" color="#fa541c" />
);

export const HumidityGraphics = ({ data }) => (
    <GraphicsBase data={data} dataKey="humidity" label="Вологість (%)" unit="%" color="#1890ff" />
);

export const AirQualityGraphics = ({ data }) => (
    <GraphicsBase data={data} dataKey="airQuality" label="Якість Повітря" unit="ppm" color="#52c41a" />
);

export default GraphicsBase;