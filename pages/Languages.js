import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  return (
      <div className="center column section" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="fade" style={{width:"330px",textAlign:"center"}}>
                I am a self-employed frontend web developer
            </div>
        </div>
  );
}