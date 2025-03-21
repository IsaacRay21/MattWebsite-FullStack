import React from 'react'
import ReactPlayer from 'react-player'
import './css/Video.css';
import { Navbar } from "../components/navbar.jsx";
import packageInfo from "../data/videoData.json";

function Video() {
  return (
    <div className='video'>
      <Navbar/>
      <div className="content"> 
        <div className='top_pad'></div>
            {packageInfo.map((video, idx) => {
                return( 
                    <div className="video-container" id={"video_" + idx}>
                        <div className='video-video'>
                            <ReactPlayer 
                                key={idx}
                                url={video.videoUrl}
                                controls='100'
                                width='100%'
                                height='100%'
                            />
                        </div>
                        <div className="video-text" id={"video_" + idx +"_text"}>
                            <h1>{video.title}</h1>
                            <p>{video.description}</p>
                        </div>
                    </div>
                )   
            })}    
        </div>
    </div>
  )
}

export default Video;