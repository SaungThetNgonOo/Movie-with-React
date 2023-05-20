import React,{useState,useEffect,useContext, Component} from "react";

const AppContext=React.createContext();
const FeatureApi="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2"
const ImgApi="https://image.tmdb.org/t/p/w1280"
const SearchApi="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
console.log(FeatureApi)

console.log(ImgApi)
console.log(SearchApi)

function Toggler(){

    return(
        <div></div>
    )
}
