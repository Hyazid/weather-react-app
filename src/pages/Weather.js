import React, {useState} from 'react'
import axios from 'axios';

function Weather() {
    const [city, setCity]=useState('');
    const [weather, setWeather]=useState(null)
    const [error, setError]=useState('')
    const [darkMode, setDarkMode] = useState(false)
    const API_KEY='API key';
    const getWeateher = async ()=>{
        if(!city) return;
        try {
            const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            setWeather(res.data);
            setError('')
          }catch (err){
          setWeather(null);
          setError('city not found')
        }
      }
      return  (
        <div className={`container text-center py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`} style={{ minHeight: '100vh' }}>
          <button className='btn btn-danger mt-3' onClick={()=>{
            localStorage.removeItem('user')
            window.location.href='/login'
          }}>Logout</button>
          <h2>weather app</h2>
          <button 
          className={`btn ${darkMode ? 'btn-light': 'btn-dark'}my-3`}
          onClick={()=>setDarkMode(!darkMode)}
          > Toggle {darkMode ? 'light':'dark'} Mode</button>
    
          <input
          type='text'
          placeholder='enter your city'
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          className={`form-control my-3 ${darkMode ? 'bg-secondary text-white':''}`}
          />
          <button onClick={getWeateher} className='btn btn-primary'>get Weather</button>
          {error && <p className='text-danger mt-3'>{error}</p>}
          {weather && (<div className='mt-4'>
            <h3>{weather.name}</h3>
            <p>{weather.weather[0].description}</p>
            <h4>{weather.main.temp}</h4>
            <p>Humidity: {weather.main.humidity}%</p>
             <p>Wind: {weather.wind.speed} km/h</p>
    
    
    
          </div>)}
        </div>
      );
}

export default Weather