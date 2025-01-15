import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }){
  const router = useRouter();
  return <div>
    <div className=" center" style={{cursor:"pointer",justifyContent:"end",height:'50px',width:"100vw",position:"fixed",backgroundColor:"purple",color:"white",zIndex:"100",top:"0px",paddingRight:"10px"}}>
      <div style={{margin:"15px"}} onClick={()=>{router.push('/')}} >Home</div>
      <div style={{margin:"15px"}} onClick={()=>{router.push('/')}} >About</div>
      <div style={{margin:"15px"}} onClick={()=>{router.push('/')}} >Languages</div>
      <div style={{margin:"15px"}} onClick={()=>{router.push('/')}} >Project</div>
    </div>
    <Component {...pageProps} />
  </div>;
}
