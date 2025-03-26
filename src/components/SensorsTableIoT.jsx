import React from "react";
import {Thermometer, Droplet, Wind, Clock, Timer} from "lucide-react";
import sensorsInfo from "../info/SensorsInfo";
import '../style/problems.css';

function SensorsTableIoT(){
    const nonWorkingSensors = sensorsInfo.filter(sensor => !sensor.isWorking);
    const WorkingSensors = sensorsInfo.filter(sensor => sensor.isWorking);

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th className="header">Аудиторія</th>
                    <th className="header">Стан</th>
                    <th className="header">Температура</th>
                    <th className="header">Вологість</th>
                    <th className="header">Якість повітря</th>
                    <th className="header">Час останньої передачі даних</th>
                </tr>
                </thead>
                <tbody>
                {nonWorkingSensors.map(sensor => (
                    <tr key={sensor.id} className="row">
                        <td className="cell">{sensor.name}</td>
                        <td className="cell">
                            <div className="icon-text">
                                <span>🔴{sensor.reason}</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Thermometer size={20} color="#fa541c"/>
                                <span>{sensor.temperature}°C</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Droplet size={20} color="#1890ff"/>
                                <span>{sensor.humidity}%</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Wind size={20} color="#52c41a"/>
                                <span>{sensor.airQuality}%</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Timer size={20} color="#52c41a"/>
                                <span>{sensor.dateTime}</span>
                            </div>
                        </td>
                    </tr>
                ))}

                {WorkingSensors.map(sensor => (
                    <tr key={sensor.id} className="row">
                        <td className="cell">{sensor.name}</td>
                        <td className="cell">
                            <div className="icon-text">
                                <span>🟢OK</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Thermometer size={20} color="#fa541c"/>
                                <span>{sensor.temperature}°C</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Droplet size={20} color="#1890ff"/>
                                <span>{sensor.humidity}%</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Wind size={20} color="#52c41a"/>
                                <span>{sensor.airQuality}%</span>
                            </div>
                        </td>
                        <td className="cell">
                            <div className="icon-text">
                                <Timer size={20} color="#52c41a"/>
                                <span>{sensor.dateTime}</span>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SensorsTableIoT;