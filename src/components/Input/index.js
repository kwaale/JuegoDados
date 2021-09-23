import { useState } from 'react';
import Dados from '../Dados';
import './Input.css';


const Input = ()=>{
    const [craps, setCraps] = useState(0)
    const crapsCuantity = (e)=>{
        const {value} = e.target
        setCraps(value)
    }

    return(
        <div className='containers'>
            <input type="number" placeholder="cantidad de dados" onChange={crapsCuantity}></input>
            <Dados input={craps}/>
        </div>
    )
}
export default Input;