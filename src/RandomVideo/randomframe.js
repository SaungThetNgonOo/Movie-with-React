import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import './RandomFrame.css'

const RandomFrame=({title,img,rating,year,id})=>{

    return(
    
            <Link to={`/movie/${id}`} className="RandomMovie text-red">
                <div className="Random ">
                    <div >
                        <Link to={`/movie/${id}`} className="img" >
                            <img src={img} alt='title' />
                        </Link>
                        <p>{title.length >11 ? title.slice(0,10) +"...":title}</p>
                        <p className="randomRating">{year}/{""}
                            <span>
                                <AiTwotoneStar />
                                {rating}
                            </span>
                        </p>
                    </div>
                </div>
            </Link>
        
    )
}
export default RandomFrame