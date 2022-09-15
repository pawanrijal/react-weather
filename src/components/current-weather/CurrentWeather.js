import "./current-weather.css";

const CurrentWeather = (props) => {
  const imgSrc=`icons/${props.iconName}.png`;
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{props.city}</p>
        <p className="weather-description">{props.desc}</p>

        <img alt="weather" className="weather-icon" src={imgSrc}/>
       
      </div>

      <div className="bottom">
        <p className="temperature">
          {/* 20°C   */}
          {props.temp}°C 
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {props.feelsLike}°C 
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{props.wind}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
        
        <div className="parameter-row">
          <span className="parameter-label">Pressure</span>
          <span className="parameter-value">15hpa</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
