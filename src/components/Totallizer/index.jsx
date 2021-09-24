const totallizerstyle = {
    backgroundColor:'#002296',
    padding:'10px',
    color:'white',
    margin:'10px',
    fontSize:'inherit',
    width: '85px',
    borderRadius: '10px'
};
const Totallizer = ({total})=>{
    return(
        <div style={totallizerstyle}>
            Total = {total}
        </div>
    )
}
export default Totallizer;