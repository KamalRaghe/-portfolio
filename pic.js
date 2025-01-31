import { useEffect, useState } from "react"

export default function Pic({title,pic,small,top}){
    const [bigger,setBigger] = useState('1')
    useEffect(()=>{
        if(small){
            setBigger('1.65')
        }
    })
    return <span className="center column fade" style={{width:"170px",position:"relative",right:"10px"}} >
        <span style={{position:"relative",bottom:top,marginTop:"35px"}} >{title}</span>
        <img style={{margin:"15px",width:"130px",position:"relative",bottom:"5px",scale:bigger}} src={pic}></img>
    </span>
}