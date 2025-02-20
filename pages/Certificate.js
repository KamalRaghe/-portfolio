import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Pic from "@/pic";
export default function Home() {
  const router = useRouter()
  return (
    <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
        <div className="center column fade" style={{scale:'0.5',height:"100vh"}} >
            <img className="glow" src={'cer.png'}></img>               
        </div>
    </div>
  );
}