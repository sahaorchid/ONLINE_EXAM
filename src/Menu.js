import React, { useEffect, useState } from "react"
import {NavLink,Link} from "react-router-dom"
import './menu.css';

function Menu(props){
    const arr=[];
    //to create 15 navlink create 15 length array
    for(var i=1;i<15;i++){
        if(i<10){arr.push("0"+i.toString())}
        else{arr.push(i.toString())}
    }

    return(
        <>
          <div>
              <h1 className="div_h1">question no.</h1>
          </div>

          <div className="linkdiv">
          {arr.map((value)=>{
              return(
                  <>
                <NavLink exact={false}  to={"/home/"+value}  className={parseInt(value)===props.qno?"activeclass":"homeclass"} >{value}</NavLink>
                </>
              )
          })}
          </div>
        </>
    )
            
}
export default Menu;