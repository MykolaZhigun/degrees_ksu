const generateRandomData = () => {
    const now = new Date();
    const data = [];
    for (let i = 6; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60 * 60 * 1000);
        data.push({
            time: `${time.getHours().toString().padStart(2, '0')}:00`,
            temperature: (Math.random() * 10 + 15).toFixed(1),
            humidity: Math.floor(Math.random() * 40 + 30),
            airQuality: Math.floor(Math.random() * 1101) + 400
        });
    }
    return data;
};

const historicalData = generateRandomData();

export default historicalData;