import Headers from "../components/Headers";
import historicalData from "../info/HistoricalData";
import React from "react";
import "../style/securityStyle.css"

function SecurityPage() {
  return (
    <div>
        <Headers
            temperature={historicalData[historicalData.length - 1].temperature}
            humidity={historicalData[historicalData.length - 1].humidity}
            airQuality={historicalData[historicalData.length - 1].airQuality}
        />
        <h1 className={"soon-txt"}>Сторінка в розробці...</h1>
    </div>
  );
}

export default SecurityPage;