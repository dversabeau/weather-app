import './HeroBanner.css';

function HeroBanner(props) {

    // const { description, icon, temp, humidity, wind } = props;
    const {weather} = props;

    return (
        <div className='flex column align-center hero-body'>
            <h3>Aujourd'hui</h3>
            
            { weather && (
                <div className='flex row align-end hero-container justify-space'>
                <div className='flex column align-center'>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}></img>
                    <span className='capitalize'>{weather.weather[0].description}</span>
                </div>
                <div className='flex column align-center'>
                    <p>Température</p>
                    <span>{(weather.main.temp).toFixed()} °C</span>
                </div>
                <div className='flex column align-center'>
                    <p>Humidité</p>
                    <span>{weather.main.humidity} %</span>
                </div>
                <div className='flex column align-center'>
                    <p>Vent</p>
                    <span>{(weather.wind.speed * 3.6).toFixed()} km/h</span>
                </div>
            </div>
            )}



        </div>
    )
}

export default HeroBanner;