import './PrevisionCard.css'

function PrevisionCard(props) {

  const { list } = props;
  console.log('list', list)


  return (
    <div className='flex column align-center prevision-card-body'>
      {/* {list[0][0].weather[0].description} */}
    </div>
  );

}

export default PrevisionCard;