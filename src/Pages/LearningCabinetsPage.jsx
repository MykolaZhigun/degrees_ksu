import Headers from "../components/Headers";
import React from "react";
import historicalData from "../info/HistoricalData";
import Cabinets from "../components/Cabinets";
import sensorsInfo from "../info/SensorsInfo";

function LearningCabinetsPage() {
    return (
        <>
            <Headers
                temperature={historicalData[historicalData.length - 1].temperature}
                humidity={historicalData[historicalData.length - 1].humidity}
                airQuality={historicalData[historicalData.length - 1].airQuality}
            />

            <div style={{
                marginTop: "20px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                maxWidth: "960px",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                {sensorsInfo.map(sensor => (
                    <Cabinets
                        key={sensor.name}
                        name={sensor.name}
                        temperature={sensor.temperature}
                        humidity={sensor.humidity}
                        airQuality={sensor.airQuality}
                    />
                ))}
            </div>
        </>
    );
}

export default LearningCabinetsPage;