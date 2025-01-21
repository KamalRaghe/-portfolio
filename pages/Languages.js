import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  return (
      <div className="center column" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
                <div className="center column fade" >
                <div style={{width:"250px",padding:"2px",margin:"10px",textAlign:"center",borderBottom:"2px solid black"}}>
                    My technology stack
                </div>
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
        </div>
  );
}