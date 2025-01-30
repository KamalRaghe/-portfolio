import { Html } from "next/document";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import HtmlPic from "@/photo/html";
import CssPic from "@/photo/css";
import JsPic from "@/photo/js";
import TsPic from "@/photo/ts";
import ReactPic from "@/photo/react";
export default function Home() {
  const router = useRouter()
  return (
      <div className="center column" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
                <div className="center column fade" style={{paddingTop:"90px"}} >
                <div style={{width:"250px",padding:"2px",marginBottom:"50px",textAlign:"center",borderBottom:"2px solid white"}}>
                    My technology stack
                </div>
                    <div className="screen" style={{position:"relative",marginTop:"20px"}} >
                    <HtmlPic />
                    <CssPic></CssPic>
                    <JsPic></JsPic>
                    <TsPic/>
                    <div>
                        <ReactPic></ReactPic>
                        <ReactPic></ReactPic>
                        <ReactPic></ReactPic>
                    </div>
                    {/* <img style={{margin:"15px",width:"130px"}} src={'/next.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/redux.png'}></img> */}
                    </div>
                </div>
            </div>
        </div>
  );
}