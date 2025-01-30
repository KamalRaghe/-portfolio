import { Html } from "next/document";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Pic from "@/pic";
export default function Home() {
  const router = useRouter()
  return (
      <div className="center column" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
                <div className="center column fade" style={{paddingTop:"90px"}} >
                <div style={{width:"250px",padding:"2px",marginBottom:"50px",textAlign:"center",borderBottom:"2px solid white"}}>
                    My technology stack
                </div>
                    <div className="screen" style={{position:"relative",marginTop:"0px"}} >
                    <div className="center" style={{justifyContent:'start',marginBottom:"10px"}} >
                        <Pic title = {"Html"} pic ={'html.png'} small={true}></Pic>
                        <Pic title = {"Css"} pic ={'css.png'}></Pic>
                        <Pic title = {"JavaScript"} pic ={'js.png'} small={true} ></Pic>
                        <Pic title = {"TypeScript"} pic ={'ts.png'}></Pic>
                    </div>
                    <div className="center" style={{justifyContent:'start'}} >
                        <Pic title = {"Html"} pic ={'react.png'}></Pic>
                        <Pic title = {"Html"} pic ={'next.png'}></Pic>
                        <Pic title = {"Html"} pic ={'redux.png'}></Pic>
                    </div>
                    {/* <img style={{margin:"15px",width:"130px"}} src={'/next.png'}></img>
                    <img style={{margin:"15px",width:"130px"}} src={'/redux.png'}></img> */}
                    </div>
                </div>
            </div>
        </div>
  );
}