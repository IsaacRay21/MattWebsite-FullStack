import {React} from 'react'
import './css/Audio.css';
import { Navbar } from "../components/navbar.jsx";
import { AudioPlayer } from "../components/audioplayer.jsx";

let data = [
  {
    "url": "/audio/audio2.mp3",
    "title": "Pinegrove - Alaska",
    "img": "https://f4.bcbits.com/img/a2227207840_10.jpg"
  },
  {
    "url": "/audio/audio1.mp3",
    "title": "Relaxing Piano Music",
    "img": "https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg"
  }
]

function Audio() {
  return (
    <div className='audio'>
      <Navbar/>
      <div className="content"> 
        <div className='top_pad'></div>
            {data.map((audio, idx) => {
                return( 
                    <div className="audio-container" id={"audio" + idx}>
                        <div className='audio-photo'>
                          <img src={audio.img} alt="audio thumbnail"></img>
                        </div>
                        <div className="audio-other" id={"audio" + idx +"_text"}>
                            <h1>{audio.title}</h1>
                            <AudioPlayer url={audio.url}/>
                            {/* <p>{audio.description}</p> */}
                        </div>
                    </div>
                )   
            })}    
        </div>
    </div>
  )
}

export default Audio;