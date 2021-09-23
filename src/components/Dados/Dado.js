import './Dados.css';

function Dado(props){
  console.log(props)
  return(
    <img className='Dado-recuadro' src={props.image}/>
  )
}

export default Dado;