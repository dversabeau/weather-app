import './PrevisionCard.css'

function PrevisionCard(props) {

  const { list } = props;
  console.log('list previsioncard', list)


  return (
    <div className='flex align-center prevision-card-body'>
      {
        list.length > 0 && list.map((item, index) => {

          return (
            <div key={index} className='prevision-card-item'>
              <h4>{item.dt_txt.substring(11, 16)}</h4>
              <p>{item.weather[0].description}</p>
              <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}></img>
            </div>
          )
        })
      }
    </div>
  );

}

export default PrevisionCard;