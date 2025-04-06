import React from "react";
import { Card, Typography } from "antd";

const { Text } = Typography;

const generateRandomData = () => {
    return Array.from({ length: 10 }).map(() => ({
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * 45).toFixed(1),
        humidity: Math.floor(Math.random() * 100)
    }));
};

const historicalData = generateRandomData();

function GraphicsBase({ data, dataKey, label, unit, color, defaultValue }) {
    const maxX = data.length - 1;
    const maxY = Math.max(...data.map(d => d[dataKey])) || 100;
    const minY = 0;

    const currentTime = new Date();
    const timeLabels = Array.from({ length: 6 }).map((_, i) => {
        const time = new Date(currentTime.getTime() - (5 - i) * 60 * 60 * 1000);
        return `${time.getHours()}:00`;
    });

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
            <div style={{ width: "100%", height: "250px", position: "relative" }}>
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                            <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {Array.from({ length: 5 }).map((_, i) => (
                        <line key={i} x1="10" y1={`${i * 25}`} x2="100" y2={`${i * 25}`} stroke="#ddd" strokeWidth="0.5" />
                    ))}

                    {Array.from({ length: 6 }).map((_, i) => {
                        const value = Math.round(minY + (maxY - minY) * (1 - i / 5));
                        return (
                            <text key={i} x="2" y={`${i * 20 + 5}`} fontSize="5" fill="#666">{value}{unit}</text>
                        );
                    })}

                    <path
                        d={`
                            M 10,${100 - (data[0][dataKey] / maxY) * 90}
                            ${data.map((point, index) => {
                            const x = (index / maxX) * 90 + 10;
                            const y = 100 - (point[dataKey] / maxY) * 90;
                            return `L ${x},${y}`;
                        }).join(" ")}
                            L ${(maxX / maxX) * 90 + 10},100
                            L 10,100 Z
                        `}
                        fill={`url(#gradient-${dataKey})`}
                        stroke="none"
                    />

                    <path
                        d={`
                            M 10,${100 - (data[0][dataKey] / maxY) * 90}
                            ${data.map((point, index) => {
                            const x = (index / maxX) * 90 + 10;
                            const y = 100 - (point[dataKey] / maxY) * 90;
                            return `L ${x},${y}`;
                        }).join(" ")}
                        `}
                        stroke={color}
                        strokeWidth="1.5"
                        fill="none"
                    />

                    {data.map((point, index) => {
                        const x = (index / maxX) * 90 + 10;
                        const y = 100 - (point[dataKey] / maxY) * 90;
                        return <circle key={index} cx={`${x}%`} cy={`${y}%`} r="1.5" fill={color} />;
                    })}
                </svg>

                <div style={{
                    position: "absolute", bottom: "5px", left: "10px", right: "10px",
                    display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#666"
                }}>
                    {timeLabels.map((time, index) => (
                        <span key={index}>{time}</span>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export const TemperatureGraphics = ({ data }) => (
    <GraphicsBase data={data} dataKey="temperature" label="Температура (°C)" unit="°C" color="#fa541c" defaultValue={5} />
);

export const HumidityGraphics = ({ data }) => (
    <GraphicsBase data={data} dataKey="humidity" label="Вологість (%)" unit="%" color="#1890ff" defaultValue={40} />
);

export const AirQualityGraphics = ({ data }) => (
    <GraphicsBase data={data} dataKey="airQuality" label="Якість Повітря" unit="ppm" color="#52c41a" defaultValue={400} />
);

export default historicalData;