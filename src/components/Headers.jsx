import { Thermometer, Droplet, Wind } from "lucide-react";
import React from "react";

function Headers({ temperature, humidity, airQuality }) {
    return (
        <div style={{ background: '#333', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', transition: 'color 0.3s', cursor: 'pointer' }}
                   onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                   onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Головна
                </a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s', cursor: 'pointer' }}
                   onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                   onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Навчальні
                </a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s', cursor: 'pointer' }}
                   onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                   onMouseLeave={(e) => e.target.style.color = 'white'}>
                    IoT
                </a>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s', cursor: 'pointer' }}
                   onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                   onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Безпека
                </a>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '5px' }}>
                    <Thermometer size={22} color="#fa541c" />
                    <span>{temperature}°C</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '5px' }}>
                    <Droplet size={22} color="#1890ff" />
                    <span>{humidity}%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: 'white', gap: '5px' }}>
                    <Wind size={22} color="#52c41a" />
                    <span>{airQuality}%</span>
                </div>
            </div>
        </div>
);
}

export default Headers;
