import { useEffect,useState } from 'react';
import './App.css';
import { Oval } from  'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';


function App() {
  const [loading,setLoading]=useState("");
  const [weather,setWeather]=useState(null);
  const [city,setCity]=useState("");
  const cities=['seoul','tokyo','paris'];
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat=position.coords.latitude;
      let lon=position.coords.longitude;
      console.log("getCurrentLocation",lat,lon);
      getWeatherByCurrentLocation(lat,lon);
    });
  };
  
  const getWeatherByCurrentLocation=async(lat,lon)=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a7dc278de1ab45dba24cf1e5705399c7&units=metric`
    setLoading(true);
    let response=await fetch(url);
    let data=await response.json();
    setWeather(data);
    console.log(data);
    setLoading(false);
    }

    const getWeatherByCityName=async()=>{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7dc278de1ab45dba24cf1e5705399c7&units=metric`
      setLoading(true);
      let response=await fetch(url);
      let data=await response.json();
      setWeather(data);
      console.log(data);
      setLoading(false);
      }
  useEffect(()=>{
    if(city==""){
    getCurrentLocation()}
    else(getWeatherByCityName())
    
  },[city]);
  
  return (
    <div className="container">
      {loading?<Oval
    height = "80"
    width = "80"
    radius = "9"
    color = 'blue'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
:<div className="container">
        
<WeatherBox weather={weather}/>
<WeatherButton cities={cities} setCity={setCity} city={city}/>
</div>}
      
      
    </div>
  );
}

export default App;
