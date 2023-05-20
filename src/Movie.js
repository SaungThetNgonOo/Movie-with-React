import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import {AiTwotoneStar} from 'react-icons/ai'
import Navgation from "./Header/Navgation";
import "./Movie component/movie.css";
import RandomVideo from "./RandomVideo/Random";
import ReactPaginate from "react-paginate";
import MovieList from "./Movie component/MovieList";
import './RandomVideo/Random.css'
import Nav from "./Header/Nav1";


const Movies = ({title, release_date,poster_path, vote_average, id,movies,setMovies,search,setSearch}) => {
    
    const pageNumbers=useState(500)
    const [page,setPage]=useState([])
    const [pageCount,setPageCount]=useState(0)
    const [currentPage,setCurrentPage]=useState()
    const [searchTerm, setSearchTerm] = useState("");
 

    

    const FeatureApi=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2`
    const ImgApi="https://image.tmdb.org/t/p/w1280"
    const SearchApi='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

    //for movies Api
     useEffect(()=>{
    const getComments=async()=>{
        const res=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}&_limit=${500}`)
        const data=await res.json()
        setMovies(data.results)
        // const total=10000
        // setPageCount(total/pageNumbers)
    
    }
   getComments()
},[page,pageNumbers])
// console.log(movies)

  

//for Pagination
const fetchComments=async (current)=>{
    const res=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}&_limit=${500}`)
    const data=await res.json()
    const total=res.headers.get('x-total-count')   
    console.log(total)
    return data
}

const handlePageClick = (event) => {
    let current=event.selected+1
    const commentsFormServer = fetchComments(current)
    setPage(current)
    setMovies(commentsFormServer)
    console.log(event.selected)
  };
  

    return( 
        <div className="Movies">
            <Nav {...movies} key={movies} setMovies={setMovies} setSearch={setSearch} search={search} movies={movies}/>
            <h1 className="text-white h4">New releases (2022)</h1>
            <RandomVideo />
            <h1 className="text-white h4 mt-2">Random Videos</h1>
            <div className="main-movie">
                {movies.length > 0 && movies.map((movie)=><MovieList key={movie.id} {...movie} />)}
            </div>
            <div className="container mt-5 pb-2">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    pageCount={500}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
                {/* <Pagination data={movies} /> */}
            </div>
        </div>
        
    )
    
};
export default Movies