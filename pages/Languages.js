import { Html } from "next/document";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Pic from "@/pic";
export default function Home() {
  const router = useRouter()
  const [delay, setDelay]= useState(500)
  const [day, setDay] = useState(Date.now())
  return (
      <div className="center column" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
                <div className="center column fade" style={{paddingTop:"90px"}} >
                <div style={{width:"250px",padding:"2px",marginBottom:"50px",textAlign:"center",borderBottom:"2px solid white"}}>
                    My technology stack
                </div>
                    <div className="screen" style={{position:"relative",marginTop:"0px",left:"90px"}} >
                    <div className="center" style={{justifyContent:'start',marginBottom:"10px"}} >
                        <Pic title = {"Html"} pic ={'html.png'} small={true} top={'40px'}></Pic>
                        <Pic title = {"Css"} pic ={'css.png'} top={'10px'}></Pic>
                        <Pic title = {"JavaScript"} pic ={'js.png'} top={'38px'} small={true} ></Pic>
                        <Pic title = {"TypeScript"} pic ={'ts.png'} top={'10px'}></Pic>
                    </div>
                    <div className="center" style={{justifyContent:'start'}} >
                        <Pic title = {"React"} pic ={'react.png'} top={'20px'}></Pic>
                        <Pic title = {"Next"} pic ={'next.png'} top={'13px'} ></Pic>
                        <Pic title = {"Redux"} pic ={'redux.png'} top={'15px'}></Pic>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  );
}