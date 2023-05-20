import React from "react";
import 'swiper/css'
import './Random.css'
import RandomFrame from './randomframe'
import randomdata from "./randomdata";
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Pagination,Autoplay,A11y} from "swiper"
import "swiper/css"
import "swiper/css/navigation"

const RandomVideo=()=>{
    return(
        <Swiper
            style={{overflow:"hidden",color:"white",textAlign:"center"}}
            loop={true}
            autoplay={{
                delay:1000,
                disableOnInteraction:false,
                pauseOnMouseEnter:true
            }}
            breakpoints={{
            360: {
            width: 375,
            slidesPerView: 3,
            },
            // when window width is >= 768px
            680: {
            width: 680,
            height: 200,
            slidesPerView: 5,
            },
            850: {
            width: 850,
            slidesPerView: 7,
            },
            1100: {
            width: 1100,
            slidesPerView: 9,
            },
            1300: {
            width: 1300,
            slidesPerView: 10,
            },
        }}
        
        modules={[Navigation,Pagination,A11y,Autoplay]}
        spaceBetween={0}
        slidesPerView={10}
        navigation
        pagination={{
            type:"fraction"
        }}
        
        onSwiper={(swiper)=>console.log(swiper)}
        onSlideChange={()=>console.log("slide changed")}>
            <div className="randomVideoPage swiper-container">
                <div className="randomVideoContainer swiper-wrapper">
                    {randomdata.map((item,index)=>{
                        return(
                            <SwiperSlide>
                                <RandomFrame key={index} {...item} />
                            </SwiperSlide>
                        )
                    })}
                </div>
            </div>
        </Swiper>
    )
}
export default RandomVideo