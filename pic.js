import { useState } from "react"

export default function Pic({title,pic,small}){
    const [bigger,setBigger] = useState('1')
    
    return <span className="center column" style={{width:"170px",position:"relative",right:"10px"}} >
        <span>{title}</span>
        <img style={{margin:"15px",width:"130px",position:"relative",bottom:"5px",scale:bigger}} src={pic}></img>
    </span>
}