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

const getRandomDate = (isWorking) => {
    const now = new Date();
    let randomDate;

    if (isWorking) {
        const pastDays = Math.floor(Math.random() * 6) + 1;
        randomDate = new Date(now.getTime() - pastDays * 24 * 60 * 60 * 1000);
    } else {
        do {
            const year = now.getFullYear() - Math.floor(Math.random() * 1);
            const month = Math.floor(Math.random() * 12);
            const day = Math.floor(Math.random() * 28) + 1;
            randomDate = new Date(year, month, day);
        } while (randomDate >= now);
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return randomDate.toLocaleDateString('uk-UA', options);
};
const sensorsInfo = [
    {
        name: "1",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: true,
        reason: "",
        time: getRandomTime(),
        dateTime: getRandomDate(true)
    },
    {
        name: "2",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: true,
        reason: "",
        time: getRandomTime(),
        dateTime: getRandomDate(true)
    },
    {
        name: "3",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: true,
        reason: getRandomReason(),
        time: getRandomTime(),
        dateTime: getRandomDate(false)
    },
    {
        name: "4",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: true,
        reason: "",
        time: getRandomTime(),
        dateTime: getRandomDate(true)
    },
    {
        name: "5",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: false,
        reason: getRandomReason(),
        time: getRandomTime(),
        dateTime: getRandomDate(false)
    },
    {
        name: "6",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: false,
        reason: getRandomReason(),
        time: getRandomTime(),
        dateTime: getRandomDate(false)
    },
    {
        name: "7",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: false,
        reason: getRandomReason(),
        time: getRandomTime(),
        dateTime: getRandomDate(false)
    },
    {
        name: "8",
        airQuality: Math.floor(Math.random() * 1101) + 400,
        temperature: (Math.random() * (35.1)).toFixed(1),
        humidity: Math.floor(Math.random() * 51 + 25),
        isWorking: false,
        reason: getRandomReason(),
        time: getRandomTime(),
        dateTime: getRandomDate(false)
    },
];

sensorsInfo.forEach(sensor => {
    if (!sensor.isWorking) {
        sensor.offTime = calculateOffTime(sensor.time);
    }
});

export default sensorsInfo;