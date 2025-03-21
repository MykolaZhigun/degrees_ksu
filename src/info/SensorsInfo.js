const getRandomReason = () => {
    const reasons = ["Disconnected", "Battery Low", "Maintenance Required", "Signal Lost"];
    return reasons[Math.floor(Math.random() * reasons.length)];
};

const getRandomTime = () => {
    const now = new Date();
    const maxPastMinutes = Math.min(now.getHours() * 60 + now.getMinutes(), 12 * 60); // Ограничиваем 12 годинами назад
    const randomMinutesAgo = Math.floor(Math.random() * (maxPastMinutes + 1));

    const randomTime = new Date(now.getTime() - randomMinutesAgo * 60 * 1000);
    const hours = randomTime.getHours().toString().padStart(2, '0');
    const minutes = randomTime.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
};

const calculateOffTime = (sensorTime) => {
    const [sensorHours, sensorMinutes] = sensorTime.split(':').map(Number);
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const sensorTotalMinutes = sensorHours * 60 + sensorMinutes;
    const currentTotalMinutes = currentHours * 60 + currentMinutes;

    const diffMinutes = Math.abs(currentTotalMinutes - sensorTotalMinutes);

    const offHours = Math.floor(diffMinutes / 60);
    const offMinutes = diffMinutes % 60;

    return `${offHours} год ${offMinutes} хв`;
};

const sensorsInfo = [
    { name: "256", airQuality: Math.floor(Math.random() * 60) + 40, temperature: (Math.random() * 45).toFixed(1), humidity: Math.floor(Math.random() * 100), isWorking: true, reason: "", time: getRandomTime() },
    { name: "444", airQuality: Math.floor(Math.random() * 60) + 40, temperature: (Math.random() * 45).toFixed(1), humidity: Math.floor(Math.random() * 100), isWorking: true, reason: "", time: getRandomTime() },
    { name: "7", airQuality: Math.floor(Math.random() * 60) + 40, temperature: (Math.random() * 45).toFixed(1), humidity: Math.floor(Math.random() * 100), isWorking: false, reason: getRandomReason(), time: getRandomTime() },
    { name: "29", airQuality: Math.floor(Math.random() * 60) + 40, temperature: (Math.random() * 45).toFixed(1), humidity: Math.floor(Math.random() * 100), isWorking: true, reason: "", time: getRandomTime() },
    { name: "26", airQuality: Math.floor(Math.random() * 60) + 40, temperature: (Math.random() * 45).toFixed(1), humidity: Math.floor(Math.random() * 100), isWorking: false, reason: getRandomReason(), time: getRandomTime() },
    { name: "36", airQuality: Math.floor(Math.random() * 60) + 40, temperature: (Math.random() * 45).toFixed(1), humidity: Math.floor(Math.random() * 100), isWorking: false, reason: getRandomReason(), time: getRandomTime() }
];

sensorsInfo.forEach(sensor => {
    if (!sensor.isWorking) {
        sensor.offTime = calculateOffTime(sensor.time);
    }
});

export default sensorsInfo;
