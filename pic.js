export default function Pic({title,pic}){
    return <span className="center column" style={{width:"170px",position:"relative",right:"10px"}} >
        <span>{title}</span>
        <img style={{margin:"15px",width:"130px",position:"relative",bottom:"5px"}} src={pic}></img>
    </span>
}