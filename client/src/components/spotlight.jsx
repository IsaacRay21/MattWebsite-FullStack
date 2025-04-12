import "./css/spotlight.css"
import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from "./carousel"

export const Spotlight = () => {
    const story_carouselRef = useRef(null);
    const storyRef = useRef(null);

    const [viewportSize, setViewportSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateStoryHeight = () => {
        if (storyRef.current && story_carouselRef.current){
            storyRef.current.style.height = `${story_carouselRef.current.offsetHeight}px`;
        }
    }
    
      // Function to update viewport size
    const updateViewportSize = () => {
        setViewportSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    };

    useEffect(() => {
        if (viewportSize.width >= 700) {
            updateStoryHeight();
        } else if (storyRef.current) {
            storyRef.current.style.height = "auto";  // Reset height when < 700px
        }
    }, [viewportSize.width]);

    useEffect(() => {
        updateStoryHeight();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateViewportSize, );
        window.addEventListener('resize', updateStoryHeight);
    
        return () => {
          window.removeEventListener('resize', updateViewportSize);
          window.removeEventListener('resize', updateStoryHeight);
        };
    }, []); 

    return (
        <div className="spotlight-container">
            <div className="story_carousel" ref={story_carouselRef}>
                <Carousel type="storycarousel"/>
            </div>
            <div className="story" ref={storyRef}>
                <h1>Title</h1>
                <p>WASHINGTON—Flailing their arms and crying out in anguish, Eric Trump and Donald Trump Jr. were reportedly panicking Thursday after getting their tongues stuck to a frozen column near the West Wing of the White House. “Oh my God, it’s thtuck, it’s thtuck!” said Don Jr., the eldest Trump boy, who blamed his brother Eric for the dare gone wrong, shouting, “Thith ith all your fault!” and attempting to kick him in the shins from the awkward angle at which he was fastened to the icy building. “We’re going to die out here! We’re going to thtarve to death! Are you happy, Eric? You wanted to know what the White Houthe tathted like, and now you know! Whereth Thecret Thervice?! Whereth FEMA?!” At press time, the Trump boys were both seen frantically slapping their tongues with their hands.</p>
            </div>
        </div>
    )
}