import { tab } from '@testing-library/user-event/dist/tab';
import { useEffect, useState } from 'react';
import './Prevision.css'
import PrevisionCard from './PrevisonCard';
import moment from 'moment';

function Prevision(props) {

    const { list } = props;
    let t_date = '';
    let t_array = [];
    let updatedTArrayGlobal = [];
    let [tArrayGlobal, setTArrayGlobal] = useState([]);

    const prevCond = () => {
        // setTArrayGlobal([]);
            
        if (list && list.length > 0) {

            list.map((item) => {

                // Si t_date n'existe pas il prend la date du premier item
                if (t_date === '') t_date = item.dt_txt.substring(0, 10);

                // Si t_date et la date de l'item sont equivalente alors on push l'item
                // dans t_array
                if (t_date.substring(0, 10) === item.dt_txt.substring(0, 10)) {

                    // console.log('item', item)
                    t_array.push(item)

                    // console.log('t_array'+` ${item.dt_txt.substring(0, 10)}`, t_array)
                } else if (t_date.substring(0, 10) !== item.dt_txt.substring(0, 10)) {
                    t_date = item.dt_txt.substring(0, 10);

                    updatedTArrayGlobal = tArrayGlobal.concat([t_array]);

                    setTArrayGlobal(tArrayGlobal => [...tArrayGlobal, ...updatedTArrayGlobal]);

                    t_array = [];
                    t_array.push(item);
                }
            })

        }
    }

    useEffect(() => {
        tArrayGlobal = [];
        updatedTArrayGlobal = [];
        t_array = [];
        console.log('useeffect',tArrayGlobal, updatedTArrayGlobal, t_array)
        prevCond()
    }, [list])


    return (
        <div className='prevision-body'>
            {tArrayGlobal && tArrayGlobal.map((item, index) => {
                console.log('taG render', tArrayGlobal)
                console.log('render updated', updatedTArrayGlobal)
                console.log('render tarray', t_array)


                return (
                    <div key={index}>
                        <h3>{index === 0 ? 'Plus tard dans la journée' : moment(item[0].dt_txt).format('DD/MM/YYYY')}</h3>
                        <PrevisionCard list={item} />
                    </div>
                )
            })}
        </div>
    )
}
export default Prevision;