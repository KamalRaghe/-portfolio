import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Pic from "@/pic";
export default function Home() {
  const router = useRouter()
  return (
    <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
        <div className="center column" >
        <div  className="fade" style={{width:"160px",padding:"2px",margin:"20px",textAlign:"center",borderBottom:"2px solid white",paddingTop:"50px"}}>
            My projects
        </div>
            <div className="center fade" style={{scale:"2",margin:"40px",marginBottom:"130px"}} >
                <Pic title = {""} pic ={'pic1.png'} top={'38px'} small={true} ></Pic>
            </div>
            <div className="center fade" style={{scale:"2",margin:"20px",marginBottom:"150px"}} >
                <Pic title = {""} pic ={'pic2.png'} top={'38px'} small={true} ></Pic>
            </div>
            <div className="center fade" style={{scale:"2",marginBottom:"150px"}} >
                <Pic title = {""} pic ={'pic3.png'} top={'38px'} small={true} ></Pic>
            </div>
            </div>
    </div>
  );
}