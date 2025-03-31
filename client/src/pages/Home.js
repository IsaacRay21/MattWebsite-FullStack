import './css/Home.css';
import { Navbar } from "../components/navbar.jsx";
import { Hero } from "../components/hero.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="content"> 
        <div className='top_pad'></div>
        <Hero src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
        <div className="content_links">  
          <Link to="/photo" className="content_links_container">
              <h1 className='links-title'>PHOTO</h1>
              <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFTrT83QHXJVM-dBw1YxrgzARY-xjBtcDiA&s"
                  alt="Photos Link"
                  className="links_img" 
              />
          </Link>
          <Link to="/video" className="content_links_container">
              <h1 className='links-title'>VIDEO</h1>
              <img 
                  src="https://s.studiobinder.com/wp-content/uploads/2017/11/Best-Video-Cameras-for-Filmmakers-Header-Image.jpg"
                  alt="Video Link"
                  className="links_img"
              />
          </Link>
          <Link to="/audio" className="content_links_container">
              <h1 className='links-title'>AUDIO</h1>
              <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxjUPZY6dCvPvrKWGXZXV8JgO-hCWZ1S-8A&s"
                  alt="Audio Link"
                  className="links_img" 
              />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;