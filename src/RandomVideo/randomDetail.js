import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import randomdata from "./randomdata";
import MovieDetailNav from "../Movie component/MovieDetailNav";
import {download,play} from 'react-icons'

function RandomDetail(props){
    const {detail_id}=useParams()

    console.log(detail_id)

    const detail=randomdata.find(detail=>detail.id==detail_id)
    
    return(
        <div>
            <MovieDetailNav />
            <div>
                <div>
                <img src={detail.img} alt={detail.title} />
            </div>
            <div>
                <h2>{detail.title}</h2>
                <div>
                    <h6>{detail.year}</h6>
                    <h6>{detail.type}</h6>
                </div>
                <p className="mb-0 ">IMDB: <span>{detail.rating}</span>/10 - {detail.length}</p>
                <p>Director: <span>{detail.director}</span></p>
                <p>Cast: {detail.cast}</p>
                <p>Desc: {detail.desc}</p>
            </div>
            <button>
                <span><play /></span>
                Watch Trailer
            </button>
            <button>Dowload
                <span>
                    <download />
                </span>
            </button>
            </div>
        </div>
    )
}
export default RandomDetail