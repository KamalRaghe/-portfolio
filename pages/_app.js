import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div>
    <div className=" center" style={{height:'70px',width:"100%",position:"fixed",backgroundColor:"black",zIndex:"100",top:"0px"}} >Hello</div>
    <Component {...pageProps} />
  </div>;
}
