import Headers from "../components/Headers";
import historicalData from "../info/HistoricalData";
import React from "react";

function SecurityPage() {
  return (
    <div>
        <Headers
            temperature={historicalData[historicalData.length - 1].temperature}
            humidity={historicalData[historicalData.length - 1].humidity}
            airQuality={historicalData[historicalData.length - 1].airQuality}
        />
        <h1>Security Page</h1>
    </div>
  );
}

export default SecurityPage;