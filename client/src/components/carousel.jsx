import React, { useState } from "react";
import "./carousel.css"
import {SlArrowLeft, SlArrowRight} from "react-icons/sl"

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setSlide(slide === 0? data.length - 1: slide - 1);
    };

    const nextSlide = () => {
        setSlide(slide === data.length - 1? 0 : slide + 1);
    };


    return (
        <div className="carousel"> 
            <SlArrowLeft className="arrow arrow-left" onClick={prevSlide}/>
            {data.map((item, idx) => {
                return (
                    <div className="slides">
                        <img src={item.src} key={idx} alt={item.alt} className={slide === idx ? "slide" : "slide slide-hidden"} />
                        <h1 className={slide === idx ? "title" : "title title-hidden"}> {item.title}</h1>
                    </div>
                )
            })}
            <SlArrowRight className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {data.map((_, idx) => {
                    return <button 
                                key={idx}
                                className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                                onClick={() => {
                                    setSlide(idx)
                                }}>
                            </button>
                })}
            </span>
        </div>
    )
};