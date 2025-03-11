import Headers from "../components/Headers";
import historicalData from "../info/HistoricalData";
import React from "react";

function IotPage()
{
    return(
        <>
            <Headers
                temperature={historicalData[historicalData.length - 1].temperature}
                humidity={historicalData[historicalData.length - 1].humidity}
                airQuality={historicalData[historicalData.length - 1].airQuality}
            />
            <h1>IoT Page</h1>
        </>
    )
}

export default IotPage;