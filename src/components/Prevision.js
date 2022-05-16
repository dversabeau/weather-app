import { tab } from '@testing-library/user-event/dist/tab';
import { useEffect, useState } from 'react';
import './Prevision.css'
import PrevisionCard from './PrevisonCard';

function Prevision(props) {

    const { list } = props;
    const current = new Date();
    const today = current.getFullYear() + '-' + (current.getMonth.length > 2 ? (current.getMonth() + 1) : ('0' + (current.getMonth() + 1))) + '-' + current.getDate()
    let t_date = '';
    const t_array = [];
    const [ t_arrayGlobal, set_tArrayGlobal ] = useState([]);

    const prevCond = () => {

        if (list && list.length > 0) {

            list.map((item) => {

                // Si t_date n'existe pas il prend la date du premier item
                if (t_date === '') t_date = item.dt_txt.substring(0, 10);

                // Si t_date et la date de l'item sont equivalente alors on push l'item
                // dans t_array
                if (t_date.substring(0, 10) === item.dt_txt.substring(0, 10)) {

                    t_array.push(item)

                    console.log('t_array', t_array)

                    // Si la t_date est différente d'item alors on change t_date pour la date d'item
                    // puis on push une copie du tableau temporaire dans le tableau general et 
                    // on réinitialise t_array
                }

                if (t_date.substring(0, 10) !== item.dt_txt.substring(0, 10)) {
                    
                    t_date = item.dt_txt.substring(0, 10);
                    set_tArrayGlobal(t_arrayGlobal => [...t_arrayGlobal, ...t_array])
                    t_array.length = 0;
                    t_array.push(item);
                }
                
            })

            console.log('t_arrayGlobal', t_arrayGlobal)
        }
    }

    useEffect(() => {
        prevCond()
    }, [list])

    // useEffect(() => {
    // }, [t_arrayGlobal])

    return (
        <div>
           { console.log('ciicicci', t_arrayGlobal) }

            {t_arrayGlobal && t_arrayGlobal.map((item, index) => {
                return (
                    <PrevisionCard key={index} list={item} />
                )
            })}
        </div>
    )
}

export default Prevision;