import Headers from "../components/Headers";
import React from "react";
import historicalData from "../info/HistoricalData";
import Cabinets from "../components/Cabinets";
import sensorsInfo from "../info/SensorsInfo";
import '../style/cabinets.css';

function LearningCabinetsPage() {
    return (
        <>
            <Headers
                temperature={historicalData[historicalData.length - 1].temperature}
                humidity={historicalData[historicalData.length - 1].humidity}
                airQuality={historicalData[historicalData.length - 1].airQuality}
            />

            <div className="page-container">
                <Cabinets sensors={sensorsInfo} />
            </div>
        </>
    );
}

export default LearningCabinetsPage;
