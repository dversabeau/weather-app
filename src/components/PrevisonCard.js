import './PrevisionCard.css'

function PrevisionCard(props) {

  const { weather } = props;
  console.log('weather card', weather)


  return (
    <div className='flex column align-center prevision-card-body'>
      {/* <p>{weather.weather[0].description}</p> */}
    </div>
  );

}

export default PrevisionCard;