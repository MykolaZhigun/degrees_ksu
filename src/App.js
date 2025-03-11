import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LearningCabinetsPage from "./Pages/LearningCabinetsPage";
import Headers from "./components/Headers";

function App() {
    return (
        <Router>
            <Headers temperature={22} humidity={55} airQuality={80} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cabinets" element={<LearningCabinetsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
