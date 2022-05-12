import './PrevisionCard.css'

function PrevisionCard(props) {

  const { weather } = props;
  console.log('weather card', weather)
  console.log('weather description', weather.weather[0].description)


  return (
    <div className='flex column align-center prevision-card-body'>
      <p>{weather.weather[0].description}</p>
    </div>
  );

}

export default PrevisionCard;