import { useEffect, useState } from "react"

export default function Pic({title,pic,small,top,glow}){
    const [bigger,setBigger] = useState('1')
    useEffect(()=>{
        if(small){
            setBigger('1.65')
        }
    })
    return <span className="center column fade" style={{position:"relative",right:"10px"}} >
        <div className="glow" style={{width:"200px",height:"150px"}} >
            {glow ? <span style={{position:"relative",top:'55px',marginTop:"35px",zIndex:"10"}} >{title}</span> :<span style={{position:"relative",bottom:top,marginTop:"35px"}} >{title}</span>}
            {glow ? <img style={{margin:"15px",width:"130px",position:"relative",bottom:"5px",scale:bigger}} src={pic}></img>
            :<img style={{margin:"15px",width:"130px",position:"relative",bottom:"5px",scale:bigger}} src={pic}></img>}
        </div>
    </span>
}