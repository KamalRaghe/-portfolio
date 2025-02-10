import { Html } from "next/document";
import { useRouter } from "next/router";
import { use, useEffect, useRef, useState } from "react";
import Pic from "@/pic";
export default function Home() {
  const router = useRouter()
  const [date, setDate] = useState(Date.now())
  const [time, setTime] = useState(Date.now())

  function update(){
    setDate(requestAnimationFrame(update))
  }
  useEffect(()=>{
    update()
    console.log(date+1000,Date.now())
},[])
  return (
      <div className="center column" style={{fontSize:"40px",fontWeight:"bolder"}} >
            <div className="center column" style={{fontSize:"25px",fontWeight:"bolder"}} >
                <div className="center column fade" style={{paddingTop:"90px"}} >
                <div style={{width:"250px",padding:"2px",marginBottom:"50px",textAlign:"center"}}>
                    My technology stack
                </div>
                    <div style={{position:"relative"}} >
                    <div className="center screen" style={{justifyContent:'start',marginBottom:"10px"}} >
                        <div className="center" >
                            {time+800 < Date.now() && <Pic title = {"Html"} pic ={'html.png'} small={true} top={'40px'}></Pic>}
                            {time+1600 < Date.now() && <Pic title = {"Css"} pic ={'css.png'} top={'10px'}></Pic>}
                        </div>
                       <div className="center" >
                            {time+2400 < Date.now() && <Pic title = {"JavaScript"} pic ={'js.png'} top={'38px'} small={true} ></Pic>}
                            {time+3200 < Date.now() && <Pic title = {"TypeScript"} pic ={'ts.png'} top={'10px'}></Pic>}
                       </div>
                    </div>
                    <div className="center screen" style={{justifyContent:'start'}} >
                        <div className="center" >
                            {time+4000 < Date.now() && <Pic title = {"React"} pic ={'react.png'} top={'20px'}></Pic>}
                            {time+4800 < Date.now() && <Pic title = {"Next"} pic ={'next.png'} top={'13px'} ></Pic>}
                        </div>
                        <div className="center" style={{position:"relative",left:"5px"}} >
                            {time+5600 < Date.now() && <Pic title = {"Redux"} pic ={'redux.png'} top={'15px'}></Pic>}
                            {time+5600 < Date.now() && <div><Pic title = {""} pic ={''} top={'15px'}></Pic></div>}
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
  );
}