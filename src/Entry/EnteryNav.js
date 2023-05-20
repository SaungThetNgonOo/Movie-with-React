import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './entery.css'
function EnteryNav(){
    const [login,setlogin]=useState(false)
    function logined(){
        setlogin(true)
        console.log(login)
    }
    return(
        <div className="Enterynav">
            <img src="https://channelmyanmar.org/wp-content/uploads/2018/12/44196111_2314620771886952_165796934605340672_n-4.jpg" alt="" className="entery-logo" />
            <button className="nav-btn" onClick={logined}><NavLink to="/login" className="nav-link">Login</NavLink></button>
        </div>
    )
    
}
export default EnteryNav