import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  const about = useRef()
  const lan = useRef()
  const pro = useRef()
  const home = useRef()
  return (
    <div>
       <div className=" center" style={{cursor:"pointer",justifyContent:"end",height:'50px',width:"100vw",position:"fixed",zIndex:"100",top:"0px",paddingRight:"10px",color:"blue",borderTop:"0px",backgroundColor:"white"}}>
      <div style={{margin:"15px"}} onClick={()=>{
            home.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }} >Home</div>
      <div style={{margin:"15px"}}  onClick={()=>{
            about.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }} >About</div>
      <div style={{margin:"15px"}}  onClick={()=>{
            lan.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }} >Languages</div>
      <div style={{margin:"15px"}}  onClick={()=>{
            pro.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }} >Project</div>
    </div>
      <div ref = {home} className="center column section">
      <div className="first name" style={{color:"navy",position:"relative",right:"30px"}} >
          Kamal
        </div>
        <div className="last name" style={{color:"orange",position:"relative",left:"30px",bottom:"40px"}} >Raghe</div>
        <div className=" title name" style={{backgroundColor:"purple",color:"white",position:"relative",bottom:"38px",fontSize:"40px",padding:"10px 70px"}}  >
          E-portfolio 
        </div>
        <div className="center subtitle " style={{fontSize:"20px",color:"blue",position:"relative",bottom:"15px",cursor:"pointer"}} >
          <div style={{borderBottom:"2px solid blue"}} onClick={()=>{
            about.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }} >About</div>
          <div style={{margin:"0 30px",borderBottom:"2px solid blue"}} onClick={()=>{
             lan.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }} >Languages</div>
          <div style={{borderBottom:"2px solid blue"}} onClick={()=>{
             pro.current?.scrollIntoView({
              behavior: 'smooth',
            })
          }}  >Project</div>
        </div>
      </div>
      <div ref={about} className="center column section" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="fade" style={{width:"330px",textAlign:"center"}}>
                I am a self-employed frontend web developer
            </div>
        </div>
        <div ref={lan} ></div>
        <div className="center column section" style={{fontSize:"25px",fontWeight:"bolder",height:"120vh"}} >
          <div className="fade" style={{width:"250px",padding:"2px",margin:"10px",textAlign:"center",borderBottom:"2px solid black"}}>
                My technology stack
            </div>
            <div className="center fade" >
                <div className="screen" style={{position:"relative"}} >
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                  <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                </div>
            </div>
        </div>
        <div ref={pro} ></div>
        <div className="center column section" style={{fontSize:"25px",fontWeight:"bolder",height:"150vh"}} >
            <div  className="fade" style={{width:"160px",padding:"2px",margin:"10px",textAlign:"center",borderBottom:"2px solid black"}}>
                My projects
            </div>
            <div className="center column" >
                <div className="center fade" style={{backgroundColor:"white",width:"250px",height:"200px"}} >
                    Project 1
                </div>
                <div className="center fade" style={{backgroundColor:"white",width:"250px",height:"200px",margin:"20px"}} >
                    Project 2
                </div>
                <div className="center fade" style={{backgroundColor:"white",width:"250px",height:"200px"}} >
                    Project 3
                </div>
                </div>
        </div>
    </div>
  );
}
