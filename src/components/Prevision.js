import { useEffect, useState } from 'react';
import './Prevision.css'
import PrevisionCard from './PrevisonCard';
import moment from 'moment';
import { useSelector } from 'react-redux';

function Prevision() {

    const apiData = useSelector((state) => state.apiData.apiData);
    let t_date = '';
    let t_array = [];
    let [tArrayGlobal, setTArrayGlobal] = useState([]);

    const prevCond = () => {

        if (apiData && apiData.list !== null) {

            apiData.list.map((item) => {

                // Si t_date n'existe pas il prend la date du premier item
                if (t_date === '') t_date = item.dt_txt.substring(0, 10);

                // Si t_date et la date de l'item sont equivalente alors on push l'item
                // dans t_array
                if (t_date === item.dt_txt.substring(0, 10)) {

                    // console.log('item', item)
                    t_array.push(item)

                    // console.log('t_array'+` ${item.dt_txt.substring(0, 10)}`, t_array)
                } else if (t_date !== item.dt_txt.substring(0, 10)) {
                    t_date = item.dt_txt.substring(0, 10);

                    let updatedTArrayGlobal = tArrayGlobal.concat([t_array]);

                    setTArrayGlobal(tArrayGlobal => [...tArrayGlobal, ...updatedTArrayGlobal]);

                    t_array = [];
                    t_array.push(item);
                }
            })
        }
    }

    useEffect(() => {
        prevCond()
    }, [apiData])

    return (
        <div className='prevision-body'>
            {tArrayGlobal && tArrayGlobal.map((item, index) => {
                console.log('item', item, index)
                return (
                    <div key={index}>
                        <h3>{index === 0 ? 'Plus tard dans la journée' : moment(item[0].dt_txt).format('DD/MM/YYYY')}</h3>
                        <PrevisionCard list={item} />
                    </div>
                )
                
            })}
            { tArrayGlobal.length = [] }
        </div>
    )
}
export default Prevision;