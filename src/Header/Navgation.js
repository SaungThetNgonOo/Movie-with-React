import React from "react";
import './navigation.css'
import Nav1 from "./Nav1"
function Navgation(props){
    return(
        <React.Fragment>
            <Nav1 movies={props.movies}/>
        </React.Fragment>
    )
}export default Navgation