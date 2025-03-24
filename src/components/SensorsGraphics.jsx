import React from "react";
import { TemperatureGraphics, HumidityGraphics, AirQualityGraphics } from "./Graphics";
import sensorsInfo from "../info/SensorsInfo";

const SensorsGraphics = () => {
    return (
        <div className="sensors-graphics-container">
            <TemperatureGraphics data={sensorsInfo.map(sensor => ({ temperature: sensor.temperature }))} />
            <HumidityGraphics data={sensorsInfo.map(sensor => ({ humidity: sensor.humidity }))} />
            <AirQualityGraphics data={sensorsInfo.map(sensor => ({ airQuality: sensor.airQuality }))} />
        </div>
    );
};

export default SensorsGraphics;