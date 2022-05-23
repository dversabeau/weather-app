import { useSelector } from 'react-redux';
import './HeroBanner.css';

function HeroBanner() {

    const apiData = useSelector((state) => state.apiData.apiData);

    return (
        <div className='flex column align-center hero-body'>
            <h3>Aujourd'hui</h3>

            {apiData && (
                <div className='flex row align-end hero-container justify-space'>
                    <div className='flex column align-center'>
                        <img src={`https://openweathermap.org/img/wn/${apiData.list[0].weather[0].icon}.png`}></img>
                        <span className='capitalize'>{apiData.list[0].weather[0].description}</span>
                    </div>
                    <div className='flex column align-center'>
                        <p>Température</p>
                        <span>{(apiData.list[0].main.temp).toFixed()} °C</span>
                    </div>
                    <div className='flex column align-center'>
                        <p>Humidité</p>
                        <span>{apiData.list[0].main.humidity} %</span>
                    </div>
                    <div className='flex column align-center'>
                        <p>Vent</p>
                        <span>{(apiData.list[0].wind.speed * 3.6).toFixed()} km/h</span>
                    </div>
                </div>
            )}



        </div>
    )
}

export default HeroBanner;