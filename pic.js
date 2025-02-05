import { useEffect, useState } from "react"

export default function Pic({title,pic,small,top,glow}){
    const [bigger,setBigger] = useState('1')
    const [Glow,setGlow] = useState('')
    useEffect(()=>{
        if(small){
            setBigger('1.65')
        }
        if(glow){
            setGlow('center column fade glow')
        }else{
            setGlow('center column fade')
        }
    })
    return <span className={Glow} style={{width:"170px",position:"relative",right:"10px"}} >
        {glow ? <span style={{position:"relative",top:'55px',marginTop:"35px",zIndex:"10"}} >{title}</span> :<span style={{position:"relative",bottom:top,marginTop:"35px"}} >{title}</span>}
        {glow ? <img  style={{margin:"15px",width:"130px",position:"relative",bottom:"5px",scale:bigger}} src={pic}></img>
        :<img style={{margin:"15px",width:"130px",position:"relative",bottom:"5px",scale:bigger}} src={pic}></img>}
    </span>
}