import {Circle} from "lucide-react";
import {Card, Typography} from "antd";
import React from "react";
import "../style/sensors.css";


const {Text} = Typography;
function Sensors(props) {
    return (
        <Card
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
                minWidth: "60px",
                height: "45px",
                width: "108px"
            }}
        >
            <Circle size={12} color={props.color} fill={props.color} />
            <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 8 }}>
                {props.numbers}
            </Text>
        </Card>
    );
}

export default Sensors;
