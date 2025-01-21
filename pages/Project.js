import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  return (
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
  );
}