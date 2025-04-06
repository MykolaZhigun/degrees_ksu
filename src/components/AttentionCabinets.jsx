import React, { useState } from "react";
import { Thermometer, Droplet, Wind, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import sensorsInfo from "../info/SensorsInfo";
import '../style/problems.css';

const AttentionCabinets = () => {
    const [openPanels, setOpenPanels] = useState({});

    const problematicRooms = sensorsInfo
        .map(sensor => {
            const issues = [];
            if (sensor.temperature < 10 || sensor.temperature > 35) {
                issues.push({ text: sensor.temperature < 10 ? "Маленька температура (меньше 10°C)" : "Висока температура (більше 35°C)", icon: <Thermometer size={18} color="#fa541c" /> });
            }
            if (sensor.humidity < 25 || sensor.humidity > 80) {
                issues.push({ text: sensor.humidity < 30 ? "Маленька вологість (меньше 30%)" : "Велика вологість (більше 70%)", icon: <Droplet size={18} color="#1890ff" /> });
            }
            if (sensor.airQuality >= 1000) {
                issues.push({ text: "Погана якість повітря", icon: <Wind size={18} color="#52c41a" /> });
            }
            return { ...sensor, issues };
        })
        .filter(sensor => sensor.issues.length > 0);

    const togglePanel = (index) => {
        setOpenPanels(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th className="header">Аудиторія</th>
                    <th className="header">Статус</th>
                    <th className="header">Температура</th>
                    <th className="header">Вологість</th>
                    <th className="header">Якість повітря</th>
                    <th className="header">Час</th>
                    <th className="header"></th>
                </tr>
                </thead>
                <tbody>
                {problematicRooms.map((room, index) => (
                    <React.Fragment key={index}>
                        <tr className="row">
                            <td className="cell">{room.name}</td>
                            <td className="status-cell-problem">
                                <div className="icon-text">
                                    <AlertTriangle size={18} color="#fa541c" />
                                    <span>Проблема</span>
                                </div>
                            </td>
                            <td className={room.temperature < 10 || room.temperature > 35 ? "highlight-cell" : "cell"}>
                                <div className="icon-text">
                                    <Thermometer size={20} color="#fa541c" />
                                    <span>{room.temperature}°C</span>
                                </div>
                            </td>
                            <td className={room.humidity < 25 || room.humidity > 80 ? "highlight-cell" : "cell"}>
                                <div className="icon-text">
                                    <Droplet size={20} color="#1890ff" />
                                    <span>{room.humidity}%</span>
                                </div>
                            </td>
                            <td className={room.airQuality >= 1000 ? "highlight-cell" : "cell"}>
                                <div className="icon-text">
                                    <Wind size={20} color="#52c41a" />
                                    <span>{room.airQuality} ppm</span>
                                </div>
                            </td>
                            <td className="cell">{room.time}</td>
                            <td className="cell">
                                <button onClick={() => togglePanel(index)} className="button">
                                    {openPanels[index] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </button>
                            </td>
                        </tr>
                        {openPanels[index] && (
                            <tr>
                                <td colSpan="7" className="panel-cell">
                                    <div className="panel">
                                        {room.issues.map((issue, i) => (
                                            <div key={i} className={`issue ${room.issues.length > 1 ? 'multiple-issues' : ''}`}>
                                                {issue.icon}
                                                <span>{issue.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttentionCabinets;