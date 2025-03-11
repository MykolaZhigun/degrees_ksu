import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LearningCabinetsPage from "./Pages/LearningCabinetsPage";
import IotPage from "./Pages/IotPage";
import SecurityPage from "./Pages/SecurityPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cabinets" element={<LearningCabinetsPage/>} />
                <Route path="/cabinets" element={<LearningCabinetsPage/>} />
                <Route path="/IoT" element={<IotPage/>} />
                <Route path="/security" element={<SecurityPage/>} />
            </Routes>
        </Router>
    );
}

export default App;