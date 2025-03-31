import "./css/hero.css"
import { useState, useEffect } from "react";

export const Hero = ({src}) => {
    const [blur, setBlur] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            
            const scrollY = window.scrollY;
            const imgHeight = document.getElementById("hero-img").offsetHeight
            const maxBlur = 10;
            const newBlur = Math.min(scrollY/ imgHeight, 1) * maxBlur;
            console.log(newBlur);
            setBlur(newBlur)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <img id="hero-img" src={src} alt= "hero-img" style={{ filter: `blur(${blur}px)` }}/>
    )
}