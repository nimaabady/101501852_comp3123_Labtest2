import React, { useState, useEffect } from 'react'

function Weather({ city }){
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        async function getWeather() {
            try {
                const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=05c6db19d3081b9abd00b4f206b38bcb`)
                const data = await res.json()
                setWeather(data)
            }
            catch (err){
                console.error("Failed to get Weather: " + err)
            }
        }

        getWeather()
    //added so whenever the city changes to update
    }, [city])

    if (!weather || !weather.main) return <h1>Weather not loaded</h1>


    return (
        <div>
            <div>
                <h1 style={{ color: "#000000" }}>Weather in {city}</h1>
                <br></br>
                <h2 style={{ color: "#000000" }}>Temperature: {weather.main.temp} C</h2>
                <h3 style={{ color: "#000000" }}>Temp Range: {weather.main.temp_min} C - {weather.main.temp_max} C</h3>
                <h3 style={{ color: "#000000" }}>Humidity: {weather.main.humidity}%</h3>
                <h3 style={{ color: "#000000" }}>Air Pressure: {weather.main.pressure} mb</h3>
                <h3 style={{ color: "#000000" }}>Wind Speed: {weather.wind.speed} km/h</h3>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>        
            </div>
        </div>
    )
}

export default Weather

