import './css/Home.css';
import { useRef } from "react";
import { Navbar } from "../components/navbar.jsx";
import { Hero } from "../components/hero.jsx";
import { Link } from "react-router-dom";
import { About } from "../components/about.jsx"

function Home() {
  const linksRef = useRef()

  const scrollToLinks = () => linksRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })   


  return (
    <div className='home'>
      <Navbar />
      <div className="content"> 
        <Hero 
          src="https://i0.wp.com/photofocus.com/wp-content/uploads/2019/09/bts-featured1.jpg?resize=1280%2C720&ssl=1" 
          onLearnMoreClick={scrollToLinks}
        />
        <div ref={linksRef} className="content_links">  
          <Link to="/photo" className="content_links_container">
              <h1 className='links-title'>PHOTO</h1>
              <img 
                  src="https://www.guidetofilmphotography.com/photos/bw-guide-2.jpg"
                  alt="Photos Link"
                  className="links_img" 
              />
          </Link>
          <Link to="/video" className="content_links_container">
              <h1 className='links-title'>VIDEO</h1>
              <img 
                  src="https://videoandfilmmaker.com/wp/wp-content/uploads/2014/07/Shelley-1.jpg"
                  alt="Video Link"
                  className="links_img"
              />
          </Link>
          <Link to="/audio" className="content_links_container">
              <h1 className='links-title'>AUDIO</h1>
              <img 
                  src="https://img.apmcdn.org/e622aaff79f0fbf1a8d0f8da90da5ef0729172f3/square/fde9da-20131118-seventies.jpg"
                  alt="Audio Link"
                  className="links_img" 
              />
          </Link>
        </div>
        <About/>
      </div>
    </div>
  )
}

export default Home;