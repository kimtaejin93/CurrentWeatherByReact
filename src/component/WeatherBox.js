import React from 'react'

const WeatherBox = (props) => {
  return (
    <div className="weather-box">
        <div>{props.weather&&props.weather.name}</div>
        <h1>{props.weather&&props.weather.weather[0].description}</h1>
        <h3>온도: {props.weather&&props.weather.main.temp}C</h3>        
    </div>
  )
}

export default WeatherBox