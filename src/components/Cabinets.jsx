import { Card, Typography } from "antd";
import { Droplet, Thermometer, Wind } from "lucide-react";
import React, { useState } from "react";
import '../style/cabinets.css';

const { Title, Text } = Typography;

function Cabinets({ name, temperature, humidity, airQuality }) {
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div className="card-container">
            <Card className="card">
                <Title level={4} className="card-title">{name} Аудиторія</Title>
                <div className="card-content">
                    <div className="card-item">
                        <Thermometer size={22} color="#fa541c" />
                        <Text className="card-item-text">{temperature}°C</Text>
                    </div>
                    <div className="card-item">
                        <Droplet size={22} color="#1890ff" />
                        <Text className="card-item-text">{humidity}%</Text>
                    </div>
                    <div className="card-item">
                        <Wind size={22} color="#52c41a" />
                        <Text className="card-item-text">{airQuality}%</Text>
                    </div>
                </div>
                <button className="down-arrow-button" onClick={toggleFormVisibility}>
                    {isFormVisible ? '▲' : '▼'}
                </button>
            </Card>
            {isFormVisible && (
                <div className="additional-div">
                    <form className="hidden-form">
                        Soon
                    </form>
                </div>
            )}
        </div>
    );
}

export default Cabinets;