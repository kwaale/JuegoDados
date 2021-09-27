import './Dados.css';
// import { useEffect } from 'react';

function Dado(props){
  // useEffect(()=>{
    // setTimeout(console.log('Componente Dado timer'),4000)
    // clearTimeout()
  // },[])
  return(
    <img className='crap' src={props.image} alt={props.num}/>
  )
}

export default Dado;