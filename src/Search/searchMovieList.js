import React from "react";
import "../Movie component/movie.css";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

const ImgApi="https://image.tmdb.org/t/p/w1280"

const SearchMovieList = ({title, release_date,poster_path , vote_average, id})=>{
    return(
            <div className="movies">
            <div className="movie-img">
               <Link to={`/movies/searchMovie/${id}`} >
                <img src={ImgApi + poster_path} alt={title} />
               </Link>
                <div className="movie-rate">
                    <AiTwotoneStar />
                    {vote_average}
                </div>
                <div className="movie-detail">
                    <h3>{title.length > 15? title.slice(0,16)+"...":title}</h3>
                    <h5>{release_date}</h5>
                </div>
            </div>
        </div>
    );
};
export default SearchMovieList;