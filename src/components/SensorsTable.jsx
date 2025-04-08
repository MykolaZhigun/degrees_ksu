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
                    <th className="header" rowSpan={2}>Аудиторія</th>
                    <th className="header" rowSpan={2}>Причина відключення</th>
                    <th className="header" colSpan={3}>Останні передані показники</th>
                    <th className="header" rowSpan={2}>Час</th>
                    <th className="header" rowSpan={2}>Кількість часу після відключення</th>
                </tr>
                <tr>
                    <th className="header">Температура</th>
                    <th className="header">Вологість</th>
                    <th className="header">Якість повітря</th>
                </tr>
                </thead>
                <tbody>
                {nonWorkingSensors.map(sensor => (
                    <tr key={sensor.id} className="row">
                        <td className="cell">{sensor.name}</td>
                        <td className="cell">
                            <div className="icon-text">
                                <span>{sensor.reason}</span>
                            </div>
                        </td>
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
                                <span>{sensor.airQuality} ppm</span>
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