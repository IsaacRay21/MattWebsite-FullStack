import React, { useState } from "react";
import "./carousel.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

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
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {data.map((item, idx) => (
                <img src={item.src} key={idx} alt={item.alt} className={slide === idx ? "slide" : "slide slide-hidden"} />
            ))}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
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