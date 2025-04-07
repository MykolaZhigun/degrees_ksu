import React from "react";
import Headers from "../components/Headers";
import { TemperatureGraphics, HumidityGraphics, AirQualityGraphics } from "../components/Graphics";
import AttentionCabinets from "../components/AttentionCabinets";
import { Card, Row, Col, Typography, Progress } from "antd";
import { Thermometer, Droplet, Wind } from "lucide-react";
import Sensors from "../components/Sensors";
import SensorsTable from "../components/SensorsTable";
import sensorsInfo from "../info/SensorsInfo";
import '../style/problems.css';
import historicalData from "../info/HistoricalData";

const workingSensors = sensorsInfo.filter(sensor => sensor.isWorking);
const nonWorkingSensors = sensorsInfo.filter(sensor => !sensor.isWorking);
const nonWorkingSensorsCount = nonWorkingSensors.length;
const workingSensorsCount = workingSensors.length;
const sensorsCount = sensorsInfo.length;

const { Title, Text } = Typography;

const HomePage = () => {
    const airQuality = historicalData[historicalData.length - 1].airQuality;
    const airQualityPercent = ((airQuality - 400) / 1100) * 100;

    return (
        <div style={{ background: "#f0f2f5", minHeight: "100vh" }}>
            <Headers
                temperature={historicalData[historicalData.length - 1].temperature}
                humidity={historicalData[historicalData.length - 1].humidity}
                airQuality={airQuality}
            />

            <Title level={2} style={{ textAlign: "center" }}>Середні показники</Title>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8} style={{ width: "300px", flex: "none", marginRight: "35px" }}>
                    <Card style={{
                        width: "100%",
                        textAlign: "center",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}>
                        <Thermometer size={32} color="#fa541c" />
                        <Title level={4}>Температура</Title>
                        <Text>{historicalData[historicalData.length - 1].temperature} °C</Text>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} style={{ width: "300px", flex: "none", marginRight: "33px" }}>
                    <Card style={{
                        width: "100%",
                        textAlign: "center",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}>
                        <Droplet size={32} color="#1890ff" />
                        <Title level={4}>Вологість</Title>
                        <Text>{historicalData[historicalData.length - 1].humidity} %</Text>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} style={{ width: "300px", flex: "none" }}>
                    <Card style={{
                        width: "100%",
                        textAlign: "center",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}>
                        <Wind size={32} color="#52c41a" />
                        <Title level={4}>Якість Повітря</Title>
                        <Progress
                            percent={airQualityPercent}
                            status="active"
                            format={percent => `${airQuality} ppm`}
                            strokeColor={airQuality > 1000 ? 'red' : 'green'}
                        />
                    </Card>
                </Col>
            </Row>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
                <TemperatureGraphics data={historicalData} style={{ width: "600px", height: "400px" }} hideEndLabel={true} />
                <HumidityGraphics data={historicalData} style={{ width: "600px", height: "400px" }} hideEndLabel={true} />
                <AirQualityGraphics data={historicalData} style={{ width: "600px", height: "400px" }} hideEndLabel={true} />
            </div>

            <Title level={2} style={{ textAlign: "center" }}>Аудиторії які потребують уваги</Title>
            <AttentionCabinets temperature={historicalData[historicalData.length - 1].temperature}
                               humidity={historicalData[historicalData.length - 1].humidity}
                               airQuality={airQuality} />

            <Title level={2} style={{ textAlign: "center" }}>Інформація щодо відключених датчиків</Title>
            <div className={"sensors-style"} style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
                <Sensors color="grey" numbers={sensorsCount} />
                <Sensors color="green" numbers={workingSensorsCount} />
                <Sensors color="red" numbers={nonWorkingSensorsCount} showTable={true} />
            </div>
            <SensorsTable numbers={nonWorkingSensorsCount} />
        </div>
    );
};

export default HomePage;