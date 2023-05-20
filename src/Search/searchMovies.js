import React from "react";
import SearchMovieList from "./searchMovieList";
import '../Movie component/movieDetail.css'
import Nav from "../Header/Nav1";
import '../Movie component/movie.css'
function SearchMovies({movies,setMovies}){
    return(
        <div className="searchMovies">
            <Nav setMovies={setMovies} movies={movies} />
                <div className="main-movie">
                {movies.length > 0 && movies.map((movie)=><SearchMovieList key={movie.id} {...movie}   />)}
            </div>
        </div>
    )
}
export default SearchMovies