import React from "react";
import MovieList from "./Movie component/MovieList";
import Nav from "./Header/Nav1";
import './Movie component/movie.css'
function SearchMovies({movies,search,setMovies}){
    return(
        <div>
            <Nav setMovies={setMovies} />
                <div className="main-movie">
                {movies.length > 0 && movies.map((movie)=><MovieList key={movie.id} {...movie} />)}
            </div>
        </div>
    )
}
export default SearchMovies