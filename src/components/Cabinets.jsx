import { Card, Typography } from "antd";
import { Droplet, Thermometer, Wind } from "lucide-react";
import React from "react";

const { Title, Text } = Typography;

function Cabinets({ name, temperature, humidity, airQuality }) {
    return (
        <div style={{ flex: "0 0 auto" }}>
            <Card style={{
                width: "312px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "1px solid #d9d9d9",
                padding: "10px"  // Reduced padding to decrease height
            }}>
                <Title level={4} style={{ marginBottom: "5px" }}>{name} Аудиторія</Title>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "5px",
                    justifyItems: "center",
                    alignItems: "center"
                }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Thermometer size={22} color="#fa541c" />
                        <Text style={{ marginLeft: "5px" }}>{temperature}°C</Text>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Droplet size={22} color="#1890ff" />
                        <Text style={{ marginLeft: "5px" }}>{humidity}%</Text>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Wind size={22} color="#52c41a" />
                        <Text style={{ marginLeft: "5px" }}>{airQuality}%</Text>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Cabinets;