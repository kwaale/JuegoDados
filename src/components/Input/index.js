import { useState } from 'react';
import Dados from '../Dados';
import './Input.css';


const Input = () => {
    const [craps, setCraps] = useState(0)
    const crapsCuantity = (e) => {
        const { value } = e.target
        setCraps(parseInt(value) && parseInt(value))
    }
    const handlerCrapsNumber = (sum)=>{
        if(sum === '-' && craps > 0)setCraps(craps - 1)
        if(sum === '+' && craps < 2000)setCraps(craps + 1)
        
    }

    return (
        <div className='containers'>
            <div>
                <button className='btn-plus' onClick={()=>handlerCrapsNumber('-')}>-</button>
                <input className='input' type="text" placeholder="0" onChange={crapsCuantity} value={craps}></input>
                <button className='btn-plus' onClick={()=>handlerCrapsNumber('+')}>+</button>
            </div>
            <Dados input={craps} />
        </div>
    )
}
export default Input;