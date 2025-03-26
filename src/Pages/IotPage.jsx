import Headers from "../components/Headers";
import historicalData from "../info/HistoricalData";
import React from "react";
import SensorsTableIoT from "../components/SensorsTableIoT";

function IotPage()
{
    return(
        <>
            <Headers
                temperature={historicalData[historicalData.length - 1].temperature}
                humidity={historicalData[historicalData.length - 1].humidity}
                airQuality={historicalData[historicalData.length - 1].airQuality}
            />
            <SensorsTableIoT/>
        </>
    )
}

export default IotPage;