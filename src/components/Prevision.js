import { useEffect, useState } from 'react';
import './Prevision.css'
import PrevisionCard from './PrevisonCard';

function Prevision(props) {

    const { list } = props;
    // const listDateExceptToday = [];
    const [listDateExceptToday, setListDateExceptToday] = useState([])
    const current = new Date();
    const today = current.getFullYear() + '-' + (current.getMonth.length > 2 ? (current.getMonth() + 1) : ('0' + (current.getMonth() + 1))) + '-' + current.getDate()



    return (
        <div>
            {
                list && list.map((item, index) => {
                    if (item.dt_txt.substring(0, 10) !== today) {
                        
                        return (
                            <PrevisionCard key={index} weather={item}/>
                        )

                    }

                })
            }

        </div>
    )
}

export default Prevision;