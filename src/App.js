import logo from './logo.svg';
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Entery from './Entry/Entery';
import Home from './Home'
import Navgation from './Header/Navgation';
import Movie from './Movie'
import MovieDetail from './Movie component/MovieDetail'
import ProtectedRoute from './ProtectedRoute';
import './App.css';
import Dashboard from './Dashboard';
import Login from './LoginForm/Login';
import RandomDetail from './RandomVideo/randomDetail';
import SearchMovies from './Search/searchMovies'
import Search from './Search/Search';
import SearchDetail from './Search/searchDetail';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App(){
  const [user,setUser]=useState(null)
  const [movies,setMovies]=useState("")
  const [search]=useState()
  return(
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Entery />}></Route>
      <Route path="/home" element={<Home user={user} />}></Route>
      <Route path="/dashboard" element={
        <ProtectedRoute user={user}>
          <Dashboard user={user}/>
        </ProtectedRoute>
      }></Route>
      <Route path='/movies' element={<Movie setMovies={setMovies} movies={movies} />}></Route>
      <Route path='/movies/:movie_id' element={<MovieDetail setMovies={setMovies} movies={movies} />}></Route>
      <Route path='/movie/:detail_id' element={<RandomDetail />}></Route>
      <Route path='/movies/searchMovie/:movie_id' element={<SearchDetail setMovies={setMovies} movies={movies}/>}></Route>
      <Route path="/movie/searchMovie/" element={
      <Search item={movies}>
        <SearchMovies movies={movies} setMovies={setMovies}/>
      </Search>
      }></Route>
      <Route path='/login' element={<Login setUser={setUser}/>}></Route>
    
    </Routes>
  </BrowserRouter>
  )
}export default App


