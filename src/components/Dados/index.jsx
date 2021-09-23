import Dado from "./Dado.js"
import './Dados.css'
import { useState, useEffect } from "react";
import Totallizer from "../Totallizer/index.jsx";


const Dados = ({input})=>{
    const [craps, setCraps] = useState([]);
    const [total, setTotal]= useState(null);
    const randomCrap = () =>{
        // let image = ''
        const num = Math.floor(Math.random() * 6) + 1
        if(num == 1) return {image:'https://picsum.photos/200/300?random=2', num}
        if(num == 2) return {image:'https://picsum.photos/200/300?random=2', num}
        if(num == 3) return {image:'https://picsum.photos/200/300?random=2', num}
        if(num == 4) return {image:'https://picsum.photos/200/300?random=2', num}
        if(num == 5) return {image:'https://picsum.photos/200/300?random=2', num}
        else return {image:'https://picsum.photos/200/300?random=2', num}
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
        let array = [];
        for(let i = 0; i < num; i++){
            let obj = {
                id:idGenerator(),
                num:randomCrap().num,
                image:randomCrap().image
            }
            totallizer += obj.num;
            setTotal(totallizer)
            array.push(obj);
        }
        setCraps(array)
    }
    const lanzarDados = () =>{
        quantityCraps(input)
    }
    return(
        <div className='dados-container'>
                {total && <Totallizer total={total} />}
                <div className='craps-container'>
                {craps.map(dado => {
                    return (
                        <Dado key={dado.id} valor={dado.num} image={dado.image}/>
                    )
                })}
            </div>
            {total && <button className='btn-lanzar' onClick={lanzarDados}>Lanzar</button>}
        </div>
    )

}
export default Dados;