import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  return (
      <div className="center column" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
                <div className="center column fade" style={{paddingTop:"60px"}} >
                <div style={{width:"250px",padding:"2px",margin:"10px",textAlign:"center",borderBottom:"2px solid black"}}>
                    My technology stack
                </div>
                    <div className="screen" style={{position:"relative"}} >
                    <div><img style={{margin:"15px",width:"130px",scale:"1.65",position:"relative",bottom:"27px"}} src={'/html.png'}></img></div>
                    <img style={{margin:"15px",width:"130px"}} src={'/css.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/js.png'}></img>
                    </div>
                </div>
            </div>
        </div>
  );
}