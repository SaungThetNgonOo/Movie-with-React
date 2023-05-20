import React,{useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import MovieDetailNav from "./MovieDetailNav"
import { FaCloudDownloadAlt } from "react-icons/fa"
import './movieDetail.css'

const ImgApi="https://image.tmdb.org/t/p/w1280"
const MovieDetail=({movies,setMovies})=>{
   const [page,setPage]=useState([])
 const [movieDetail,setMovieDetail]=React.useState("dioe")
  const { movie_id } = useParams();
console.log(movie_id)
   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.results)
      movies.map((item)=>{
         if(item.id==movie_id)
         setMovieDetail(item)
      })
         
    })
    
},)

 // eslint-disable-next-line no-const-assign
 const {title,poster_path,overview,release_date,vote_average}=movieDetail
// console.log(movie)
   
 return(
    <div className="movie">
        <MovieDetailNav />
        <div className="movies-detail">
         <div className="movies-img">
            <img src={ImgApi+poster_path} alt={title}/>
         </div>
         <div className="movies-text">
            <h3 className="movies-title">{title}</h3>
            <p>IMDB: <span style={{color:"red"}}>{vote_average}</span>/10</p>
            <p>ReleaseDate: {release_date}</p>
            <p className="movies-overview">Desc: {overview}</p>
            <button className="movies-btn">Dowload
               <span><FaCloudDownloadAlt /></span>
            </button>
         </div>
        </div>
    </div>
 )
}
export default MovieDetail