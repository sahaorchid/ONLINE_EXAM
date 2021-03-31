import React from "react";
import './qus.css';

var span1=("span");
var span2=("span");
var span3=("span");
var span4=("span");
var span5=("span");
var span6=("span");


const Qus=React.memo((props)=>{
    if(props.urlid===1){
        span1=("vspan")
    }
    //for every ans given it turn into green color
    else if(props.urlid===2){span2=("vspan")}else if(props.urlid===3){span3=("vspan")}
    else if(props.urlid===4){span4=("vspan")}else if(props.urlid===5){span5=("vspan")}

   
    return(
        <>
         <div className="div1">
            <div className="div2">
                    <p className="div_p">attempt status</p>
                    <span className={span1}>01</span> <span className={span2}>02</span> <span className={span3}>03</span> <span className={span4}>04</span> <span  className={span5}>05</span>
                    <span className={span6}>06</span><span className="span">07</span> <span className="span">08</span> <span className="span">09</span>
                    <span className="span">10</span> <span className="span">11</span> <span className="span">12</span> <span className="span">13</span> <span className="span">14</span>

                </div>
        </div>    
        </>
    )
})
export default Qus;