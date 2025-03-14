const getRandomReason = () => {
    const reasons = ["Disconnected", "Battery Low", "Maintenance Required", "Signal Lost"];
    return reasons[Math.floor(Math.random() * reasons.length)];
};

const getRandomTime = () => {
    const now = new Date();
    const maxMinutes = now.getHours() * 60 + now.getMinutes();
    const randomMinutes = Math.floor(Math.random() * (maxMinutes + 1));

    const hours = Math.floor(randomMinutes / 60).toString().padStart(2, '0');
    const minutes = (randomMinutes % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}`;
};

const calculateOffTime = (sensorTime) => {
    const [sensorHours, sensorMinutes] = sensorTime.split(':').map(Number);
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const sensorTotalMinutes = sensorHours * 60 + sensorMinutes;
    const currentTotalMinutes = currentHours * 60 + currentMinutes;

    let diffMinutes;
    if (currentTotalMinutes >= sensorTotalMinutes) {
        diffMinutes = currentTotalMinutes - sensorTotalMinutes;
    } else {
        diffMinutes = currentTotalMinutes + (24 * 60 - sensorTotalMinutes);
    }

    const offHours = Math.floor(diffMinutes / 60);
    const offMinutes = diffMinutes % 60;

    return `${offHours} год ${offMinutes} хв`;
};

const sensorsInfo = [
    {
        name: "256",
        airQuality: Math.floor(Math.random() * 60) + 40,
        temperature: (Math.random() * 45).toFixed(1),
        humidity: Math.floor(Math.random() * 100),
        isWorking: true,
        reason: "",
        time: getRandomTime()
    },
    {
        name: "444",
        airQuality: Math.floor(Math.random() * 60) + 40,
        temperature: (Math.random() * 45).toFixed(1),
        humidity: Math.floor(Math.random() * 100),
        isWorking: true,
        reason: "",
        time: getRandomTime()
    },
    {
        name: "7",
        airQuality: Math.floor(Math.random() * 60) + 40,
        temperature: (Math.random() * 45).toFixed(1),
        humidity: Math.floor(Math.random() * 100),
        isWorking: false,
        reason: getRandomReason(),
        time: getRandomTime(),
    },
    {
        name: "29",
        airQuality: Math.floor(Math.random() * 60) + 40,
        temperature: (Math.random() * 45).toFixed(1),
        humidity: Math.floor(Math.random() * 100),
        isWorking: true,
        reason: "",
        time: getRandomTime()
    },
    {
        name: "26",
        airQuality: Math.floor(Math.random() * 60) + 40,
        temperature: (Math.random() * 45).toFixed(1),
        humidity: Math.floor(Math.random() * 100),
        isWorking: false,
        reason: getRandomReason(),
        time: getRandomTime(),
    },
    {
        name: "1489",
        airQuality: Math.floor(Math.random() * 60) + 40,
        temperature: (Math.random() * 45).toFixed(1),
        humidity: Math.floor(Math.random() * 100),
        isWorking: false,
        reason: getRandomReason(),
        time: getRandomTime(),
    }
];

sensorsInfo.forEach(sensor => {
    if (!sensor.isWorking) {
        sensor.offTime = calculateOffTime(sensor.time);
    }
});

export default sensorsInfo;

