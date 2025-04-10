import React, { useState } from "react";
import "./css/carousel.css"
import {SlArrowLeft, SlArrowRight} from "react-icons/sl"
import FullscreenImage from "./fullscreenImage"

export const Carousel = ({ data }) => {
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setSlide(slide === 0? data.length - 1: slide - 1);
    };

    const nextSlide = () => {
        setSlide(slide === data.length - 1? 0 : slide + 1);
    };


    return (
        <div className="carousel-container"> 
            <SlArrowLeft className="arrow arrow-left" onClick={prevSlide}/>
            {data.map((item, idx) => {
                return (
                    <div className="slides">
                        <img 
                            src={item.src} 
                            key={idx} 
                            onClick={() => setFullscreenImage(item.src)} 
                            alt={item.alt} 
                            className={slide === idx ? "slide" : "slide slide-hidden"} 
                        />
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

            {fullscreenImage && (
                <FullscreenImage
                src={fullscreenImage}
                onClose={() => setFullscreenImage(null)}
                />
            )}
        </div>
    )
};