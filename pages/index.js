import { useEffect, useState } from "react";

export default function Home() {
   const [loaded, setLoaded] = useState(false)
   const[none,setNone] = useState('')
   const[none2,setNone2] = useState('none')
   useEffect(()=>{
    setTimeout(() => {
      setNone('none')
      setNone2('')
    }, 3000);
    setTimeout(() => {
      setLoaded(true)
      setNone2('none')
    }, 4000);
   },[])
  return (
    <div>
      <div className="center column section" style={{backgroundColor:"cyan"}} >
      <div className="intro name" style={{display:none}} >Welcome</div>
      <div className="to name" style={{display:none2}}>to</div>
        {loaded && <div className="center column" ><div className="first name" style={{color:"navy",position:"relative",right:"30px"}} >
          Kamal
        </div>
        <div className="last name" style={{color:"orange",position:"relative",left:"30px",bottom:"40px"}} >Raghe</div>
        <div className=" title name" style={{backgroundColor:"purple",color:"white",position:"relative",bottom:"38px",fontSize:"40px",border:"1px solid purple",padding:"10px 70px"}}  >
          E-portfolio 
        </div></div>}
      </div>
      <div className="center column section" style={{backgroundColor:"yellow"}} >
        <div className="first name" style={{color:"navy",position:"relative",right:"30px"}} >
          Kamal
        </div>
        <div className="last name" style={{color:"orange",position:"relative",left:"30px",bottom:"40px"}} >Raghe</div>
        <div className=" title name" style={{backgroundColor:"purple",color:"white",position:"relative",bottom:"38px",fontSize:"40px",border:"1px solid purple",padding:"10px 70px"}}  >E-portfolio </div>
      </div>
    </div>
  );
}
