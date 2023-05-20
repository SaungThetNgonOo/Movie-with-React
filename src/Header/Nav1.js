import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'
import { useRef } from "react";
import '../Movie component/movie.css'
import '../App.css'

function Nav({setMovies,setSearch,movies,search}){
    const [searchTerm, setSearchTerm] = useState("");
    const SearchApi="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
    const navRef=useRef()
    const navigate=useNavigate()

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav")
    }
    const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Submitted")
        console.log(searchTerm)

        fetch(SearchApi+searchTerm)
    .then((res)=>res.json())
    .then((data)=>{
            setMovies(data.results)
            //  setUser({name:name,email:email})
            console.log(data)
            setSearch(true)
    })
    console.log(movies)
    setSearchTerm("")
    navigate('/movie/searchMovie/')
    }
    
    return(
        <header>
            <img src="https://channelmyanmar.org/wp-content/uploads/2018/12/44196111_2314620771886952_165796934605340672_n-4.jpg" alt="" className="logo"/>
            <nav ref={navRef}>
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/movies" className="nav-link">Movie</NavLink>
            <form onSubmit={handleSubmit} className="search">
                <input type="text" name="text"
                 className="searchtext" placeholder="search..."
                 value={searchTerm} onChange={handleChange} autoComplete="off"  />
            </form>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
            
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
        </header>
        
    )
}export default Nav