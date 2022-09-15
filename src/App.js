import { useState } from "react";
import { WEATHER_API_Key, WEATHER_API_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/search";

function App() {
  const [temp,setTemp]=useState(null);
  const [feelsLike,setFeelsLike]=useState(null);
  const [description,setDescription]=useState(null);
  const [city,setCity]=useState(null);
  const [iconName,setIconName]=useState(null);
  const [wind,setWind]=useState(null);
  const [humidity,setHumidity]=useState(null);
  const [pressure,setPressure]=useState(null);
  const[show,setShow]=useState(false);
 
  



  const handleOnSearchChange = (searchData) => {
    setCity(searchData.label);
   const [lat,lon]=searchData.value.split(" ")
   console.log(searchData);


   const api=`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_Key}`;
   fetch(
   api
  )
    .then((response) => response.json())
      .then((response) => {
          setShow(true);
          setTemp(Math.floor(convertToCelsius(response.main.temp)));
          setFeelsLike(Math.floor(convertToCelsius(response.main.feels_like)))
          response.weather.forEach(element => {
            setDescription(element.description);
            setIconName(element.icon)
           
          });
          setWind(response.wind.speed);
          setHumidity(response.main.humidity);
          setPressure(response.main.pressure);
          console.log(response);
      })
    .catch((err) => console.error(err));
   



   
  }
  const imgSrc=`icons/${iconName}.png`;
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      
      {show?<CurrentWeather temp={temp} feelsLike={feelsLike} city={city} desc={description} iconName={iconName} wind={wind} humidity={humidity} pressure={pressure}/>:<></>}
    </div>
  );
}

function convertToCelsius(deg){//convert kelvin to celsius
  return deg-273.5;
}

export default App;
