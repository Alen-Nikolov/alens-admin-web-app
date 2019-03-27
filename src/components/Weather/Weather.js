import React, { useEffect, useState } from 'react';
import './Weather.css';

const Weather = (props) => {
    const [weathers, setWeathers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://alen-admin.herokuapp.com/weather`);
            const weathers = await result.json();

            console.log(weathers)
            setWeathers(weathers);
        };

        fetchData();
    }, []);

    return (
        <div className="Weather">
            {weathers.map(weather => (
                <div key={weather.date} className="weather-card">
                    <p>{weather.condition}</p>
                    <p className="date">{weather.data}</p>
                    <p className="date">{weather.time}</p>
                </div>
            ))}
        </div>
    );
};

export default Weather;
