import React from "react";
import { NavLink } from "react-router-dom";
import {FiChevronsLeft} from 'react-icons/fi'
function SearchDetailNav(){
    return(
        <div className="Enterynav">
            <img src="https://channelmyanmar.org/wp-content/uploads/2018/12/44196111_2314620771886952_165796934605340672_n-4.jpg" alt="" className="entery-logo" />
            <button className="nav-btn"><NavLink to="/movie/searchMovie/" className="nav-link">Back<FiChevronsLeft /></NavLink></button>
        </div>
    )
}
export default SearchDetailNav