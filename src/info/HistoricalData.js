const generateRandomData = () => {
    const now = new Date();
    const data = [];
    for (let i = 7; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60 * 60 * 1000);
        data.push({
            time: `${time.getHours().toString().padStart(2, '0')}:00`,
            temperature: (Math.random() * 25 + 10).toFixed(1),
            humidity: Math.floor(Math.random() * 51 + 25),
            airQuality: Math.floor(Math.random() * 1101) + 400
        });
    }
    return data;
};

const historicalData = generateRandomData();

export default historicalData;