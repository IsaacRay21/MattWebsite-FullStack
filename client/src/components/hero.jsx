import "./css/hero.css"
import { useState, useEffect } from "react";

export const Hero = ({src, onLearnMoreClick}) => {
    const [blur, setBlur] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const imgHeight = document.getElementById("hero-img").offsetHeight
            const maxBlur = 10;
            const newBlur = Math.min(scrollY/ imgHeight, 1) * maxBlur;
            setBlur(newBlur)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">Hi, I'm Matt Sullivan</h1>
                <button className="hero-button" onClick={onLearnMoreClick}> Learn More!</button>
            </div>   
            <img id="hero-img" src={src} alt= "hero-img" style={{ filter: `blur(${blur}px)` }}/>
        </div>  
    )
}