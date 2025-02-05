import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const router = useRouter()
  return (
      <div className="center column section" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="about" style={{textAlign:"center"}}>
              I am a self-employed frontend web developer. That  is dedicated to creating visually appealing and highly intuitive web applications that enhance user experiences.
            </div>
        </div>
  );
}
