import React from 'react'
import './css/Audio.css';
import { Navbar } from "../components/navbar.jsx";
import packageInfo from "../data/audioData.json";

function Audio() {
  return (
    <div className='audio'>
      <Navbar/>
      <div className="content"> 
        <div className='top_pad'></div>
            {packageInfo.map((audio, idx) => {
                return( 
                    <div className="audio-container" id={"audio" + idx}>
                        <div className='audio-audio'>
                        </div>
                        <div className="video-text" id={"audio" + idx +"_text"}>
                            <h1>{audio.title}</h1>
                            <p>{audio.description}</p>
                        </div>
                    </div>
                )   
            })}    
        </div>
    </div>
  )
}

export default Audio;