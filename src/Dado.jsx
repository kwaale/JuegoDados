import './Dado.css';

function Dado(props){
  return(
    <div className='Dados'>
    <div className='Dado-recuadro'>{props.valor}</div>
    </div>
  )
}

export default Dado;