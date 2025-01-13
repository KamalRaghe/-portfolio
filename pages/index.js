import { useEffect, useState } from "react";

export default function Home() {
   const [loaded, setLoaded] = useState(false)

   useEffect(()=>{
    setTimeout(() => {
      setLoaded(true)
    }, 4000);
   },[])
  return (
    <div>
      <div className="center column section" style={{backgroundColor:"cyan"}} >
        {loaded && <div><div className="first name" style={{color:"navy",position:"relative",right:"30px"}} >
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
