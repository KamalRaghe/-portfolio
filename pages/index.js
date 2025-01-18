import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  const about = useRef()
   function(){
    scrollIn
   }
  return (
    <div>
      <div className="center column section" >
      <div className="first name" style={{color:"navy",position:"relative",right:"30px"}} >
          Kamal
        </div>
        <div className="last name" style={{color:"orange",position:"relative",left:"30px",bottom:"40px"}} >Raghe</div>
        <div className=" title name" style={{backgroundColor:"purple",color:"white",position:"relative",bottom:"38px",fontSize:"40px",padding:"10px 70px"}}  >
          E-portfolio 
        </div>
        <div className="center subtitle " style={{fontSize:"20px",color:"blue",position:"relative",bottom:"15px"}} >
          <div style={{borderBottom:"2px solid blue"}} onClick={()=>{
            const element = document.getElementById('about');
            about.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }} >About</div>
          <div style={{margin:"0 30px",borderBottom:"2px solid blue"}} onClick={()=>{router.push('/Languages')}} >Languages</div>
          <div style={{borderBottom:"2px solid blue"}} onClick={()=>{router.push('/Project')}} >Project</div>
        </div>
      </div>
      <div ref={about} className="center column section" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="fade" style={{width:"330px",textAlign:"center"}}>
                I am a self-employed frontend web developer
            </div>
        </div>
    </div>
  );
}
