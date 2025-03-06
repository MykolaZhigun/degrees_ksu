import React from "react";
import { Thermometer, Droplet, Wind, Clock } from "lucide-react";
import sensorsInfo from "../info/SensorsInfo";
import '../style/problems.css';

const SensorsTable = () => {
    const nonWorkingSensors = sensorsInfo.filter(sensor => !sensor.isWorking);

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th className="header">Аудиторія</th>
                    <th className="header">Температура</th>
                    <th className="header">Вологість</th>
                    <th className="header">Якість повітря</th>
                    <th className="header">Час</th>
                    <th className="header">Кількість часу після відключення</th>
                </tr>
                </thead>
                <tbody>
                {nonWorkingSensors.map((sensor, index) => (
                    <tr key={index} className="row">
                        <td className="cell">{sensor.name}</td>
                        <td className="cell">
                            <div className="icon-text">
                                <Thermometer size={20} color="#fa541c" />
                                <span>{sensor.temperature}°C</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Droplet size={20} color="#1890ff" />
                                <span>{sensor.humidity}%</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Wind size={20} color="#52c41a" />
                                <span>{sensor.airQuality}%</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Clock size={20} color="#555" />
                                <span>{sensor.time}</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Clock size={20} color="#555" />
                                <span>{sensor.offTime}</span>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SensorsTable;