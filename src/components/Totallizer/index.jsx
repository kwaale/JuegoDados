const totallizerstyle = {
    backgroundColor:'#002296',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'10px',
    color:'white',
    margin:'10px',
    width: '45px',
    height: '45px',
    borderRadius: '10px'
};
const Totallizer = ({total})=>{
    return(
        <div>
            {total ? <h1 style={totallizerstyle}>{total}</h1> : <p></p>}
        </div>
    )
}
export default Totallizer;