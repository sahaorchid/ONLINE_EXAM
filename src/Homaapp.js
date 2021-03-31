import './homeapp.css'
function Homeapp(){
    return(
        <>
            <div>
            <div id="leftdiv">
            <img className="img" src={'avatar7.png'}/>
            <h1 className="label" id="name">Rohan Das</h1>
            <p className="label" id="sub">Id:10701527331</p>
            <p className="label" id="uni">MAKAUT</p>
            <form className="label" action='/home/01'>
            <button className="btn">START EXAM</button>
            </form>            
                
            </div>
            <div id="rightdiv" className="label">
            <div className="fdiv">
                <p className="div2_fields" >Full Name <span id="span1">Rohan Das</span></p>
            </div>
            <div className="fdiv">
                <p className="div2_fields" >Email     <span id="span2">anythong@gmail.com</span></p>
            </div>
            <div className="fdiv">
                <p className="div2_fields" >Phone     <span id="span3">+919835421233</span></p>
            </div>
            <div className="fdiv">
                <p className="div2_fields" >Subject <span id="span4">Physics</span></p>
            </div>
            <div className="fdiv">
                <p className="div2_fields" >University <span id="span5">MAKAUT</span></p>
            </div>                                                            

            </div>
            </div>
        </>
    )
}
export default Homeapp;