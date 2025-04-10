import './css/Photo.css';
import { Carousel } from "../components/carousel.jsx";
import { Navbar } from "../components/navbar.jsx";
import { Spotlight} from "../components/spotlight.jsx";
import { Gallery } from "../components/gallery.jsx";
import packageInfo from "../data/carouselData.json";


function Photo() {
  return (
    <div className='photo'>
      <Navbar/>
      <div className="content"> 
        <div className='main_carousel'>
          <Carousel data={packageInfo.slides} /> 
        </div>
        <Spotlight data={packageInfo.slides}/>
        <Gallery data={packageInfo.slides}/>
      </div>
    </div>

  );
}

export default Photo;