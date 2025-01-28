export default function HtmlPic(){
    return <div style={{border:"1px solid white",width:"160px"}}>
        <img style={{margin:"15px",width:"130px",scale:"1.65"}} src={'/html.png'}></img>
        <span className="center" style={{paddingTop:"8px"}} >Html</span>
        <img style={{width:"130px"}} src={'/css.png'}></img>
        <span className="center" style={{paddingTop:"0px"}} >Css</span>
    </div>
}