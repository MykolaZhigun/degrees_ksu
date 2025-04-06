import { Thermometer, Droplet, Wind } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Headers({ temperature, humidity, airQuality }) {
    return (
        <div style={{ background: '#333', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <NavLink to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', transition: 'color 0.3s', cursor: 'pointer' }}
                         onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                         onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Головна
                </NavLink>
                <NavLink to="/cabinets" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s', cursor: 'pointer' }}
                         onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                         onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Навчальні
                </NavLink>
                <NavLink to="/iot" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s', cursor: 'pointer' }}
                         onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                         onMouseLeave={(e) => e.target.style.color = 'white'}>
                    IoT
                </NavLink>
                <NavLink to="/security" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s', cursor: 'pointer' }}
                         onMouseEnter={(e) => e.target.style.color = '#f0a500'}
                         onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Безпека
                </NavLink>
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
                    <span>{airQuality} ppm</span>
                </div>
            </div>
        </div>
    );
}

export default Headers;