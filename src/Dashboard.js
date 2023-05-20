import React from "react";
import Navgation from "./Header/Navgation";
import './App.css'
const Dashboard=({user})=>{
    return(
        <section className="section-dash">
            <Navgation />
            <div className="home-text">
                <h2>Hello,{user?.name} Your Logined.</h2>
                <h4>So, You can do anymore.</h4>
            </div>
        </section>
    );
}
export default Dashboard;