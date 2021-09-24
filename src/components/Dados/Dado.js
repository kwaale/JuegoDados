import './Dados.css';
import { useEffect } from 'react';

function Dado(props){
  console.log('Componente Dado')
  useEffect(()=>{
    // setTimeout(console.log('Componente Dado timer'),4000)
    // clearTimeout()
  },[])
  return(
    <img className='dado-recuadro' src={props.image}/>
  )
}

export default Dado;