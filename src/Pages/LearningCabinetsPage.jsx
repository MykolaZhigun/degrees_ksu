import Headers from "../components/Headers";
import React from "react";
import historicalData from "../info/HistoricalData";

function LearningCabinetsPage() {
    return (
        <>
            <Headers
                temperature={historicalData[historicalData.length - 1].temperature}
                humidity={historicalData[historicalData.length - 1].humidity}
                airQuality={historicalData[historicalData.length - 1].airQuality}
            />
            <h1>Learning Cabinets</h1>
        </>
    );
}

export default LearningCabinetsPage;