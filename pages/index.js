import { useEffect, useState } from "react";

export default function Home() {
   const [loaded, setLoaded] = useState(false)

   useEffect(()=>{
    setTimeout(() => {
      setLoaded(true)
    }, 2000);
   },[])
  return (
    <div>
      <div className="center column section" style={{backgroundColor:"cyan"}} >
      <div className="first name" style={{color:"navy",position:"relative",right:"30px"}} >
          Kamal
        </div>
        <div className="last name" style={{color:"orange",position:"relative",left:"30px",bottom:"40px"}} >Raghe</div>
        <div className=" title name" style={{backgroundColor:"purple",color:"white",position:"relative",bottom:"38px",fontSize:"40px",padding:"10px 70px"}}  >
          E-portfolio 
        </div>
        <div className="center subtitle " style={{fontSize:"20px",color:"purple",position:"relative",bottom:"15px"}} >
          <div style={{borderBottom:"2px solid purple"}} >About</div>
          <div style={{margin:"0 30px",borderBottom:"2px solid purple"}} >Languages</div>
          <div style={{borderBottom:"2px solid purple"}} >Project</div>
        </div>
      </div>
    </div>
  );
}
