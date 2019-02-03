import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    //console.log(weatherData(capital))
    const [ weather, setWeather ] = useState({location: {name:''},current:{temp_c:'', condition:{icon:''}, wind_dir:'',wind_kph:''}})
    const fetchWeatherData = async () => {
        const results = await axios('https://api.apixu.com/v1/current.json?key=0a8caea1de394e3d88f63409190102&q='+capital,
        )
        setWeather(results.data)
    }

    useEffect(() => {
        fetchWeatherData()
    }, {})
    
    return (
        <div id={capital}>
            <h2>Weather in {weather.location.name}</h2>
            <b>temperature:</b> {weather.current.temp_c} Celsius<br/>
            <img src={weather.current.condition.icon} /><br/>
            <b>wind:</b> {weather.current.wind_kph} direction {weather.current.wind_dir}<br/>
        </div>
    )
}

export default Weather