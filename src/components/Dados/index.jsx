import Dado from "./Dado.js"
import './Dados.css'
import { useState, useEffect } from "react";
import Totallizer from "../Totallizer/index.jsx";
import dado1 from '../../img/dados/1.png'
import dado2 from '../../img/dados/2.png'
import dado3 from '../../img/dados/3.png'
import dado4 from '../../img/dados/4.png'
import dado5 from '../../img/dados/5.png'
import dado6 from '../../img/dados/6.png'
import dado from '../../img/Dado- andando.gif'


const Dados = ({input})=>{
    const [craps, setCraps] = useState([]);
    const [total, setTotal]= useState(null);
    const randomCrap = () =>{
        const num = Math.floor(Math.random() * 6) + 1
        if(num === 1) return {image:dado1, num}
        if(num === 2) return {image:dado2, num}
        if(num === 3) return {image:dado3, num}
        if(num === 4) return {image:dado4, num}
        if(num === 5) return {image:dado5, num}
        else return {image:dado6, num}
    }
    
    const idGenerator = function (){
        let init = 0;
        return ()=>init = init + 1
    }();
    useEffect(()=>{
        quantityCraps(input)
    },[input])
    let totallizer = 0;
    const quantityCraps = (num)=>{
        setCraps('x')
        setTotal('')
        let array = [];
        for(let i = 0; i < num; i++){
            const val = randomCrap()
            let obj = {
                id:idGenerator(),
                num:val.num,
                image:val.image
            }
            totallizer += obj.num;
            array.push(obj);
        }
        setTimeout(()=>{
            setCraps(array)
            setTotal(totallizer)
        },1000)
        
    }
    const lanzarDados = () =>{
        quantityCraps(input)
    }
    const dadosAndando = (craps)=>{
        if(craps === 'x')return <img className='craps-rounding' src={dado} alt='nada'/>
        return craps.map(dado => {
            return (
                <Dado key={dado.id} valor={dado.num} image={dado.image}/>
            )
        })
    }
    return(
        <div className='dados-container'>
            {input === 0 ? <p></p> : <Totallizer total={total} />}
            {input === 0 ? <p></p> : <button className='btn-lanzar' onClick={lanzarDados}>Lanzar</button>}
            <div className='craps-container'>
                {dadosAndando(craps)}
            </div>
        </div>
    )

}
export default Dados;