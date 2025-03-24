import React, { useState } from "react";
import sensorsInfo from "../info/SensorsInfo";
import { Button, Card, Typography } from "antd";
import { Droplet, Thermometer, Wind } from "lucide-react";
import "../style/cabinets.css";
import SensorsGraphics from "./SensorsGraphics";

const { Title, Text } = Typography;

function Cabinets() {
    const [selectedSensor, setSelectedSensor] = useState(sensorsInfo[0]); // Default sensor

    return (
        <div className="dashboard-container">
            <div className="sensor-buttons">
                {sensorsInfo.map(sensor => (
                    <Button
                        key={sensor.name}
                        onClick={() => setSelectedSensor(sensor)}
                        className={`sensor-button ${selectedSensor?.name === sensor.name ? "selected" : ""}`}
                    >
                        {sensor.name} Аудитория
                    </Button>
                ))}
            </div>

            <div className="graphs-container">
                <Card className="sensor-card" bordered={false}>
                    <Title level={5} className="sensor-title">
                        {selectedSensor.name} Аудитория
                    </Title>
                    <div className="sensor-details-horizontal">
                        <div className="sensor-item">
                            <Thermometer size={16} color="#ff4d4f" />
                            <Text className="sensor-text">{selectedSensor.temperature}°C</Text>
                        </div>
                        <div className="sensor-item">
                            <Droplet size={16} color="#40a9ff" />
                            <Text className="sensor-text">{selectedSensor.humidity}%</Text>
                        </div>
                        <div className="sensor-item">
                            <Wind size={16} color="#73d13d" />
                            <Text className="sensor-text">{selectedSensor.airQuality}%</Text>
                        </div>
                    </div>
                </Card>
                <SensorsGraphics />
            </div>
        </div>
    );
}

export default Cabinets;