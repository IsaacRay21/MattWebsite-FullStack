import './Photo.css';
import { Carousel } from "./components/carousel.jsx";
import { Navbar } from "./components/navbar.jsx";
import { Gallery } from "./components/gallery.jsx";
import packageInfo from "./data/carouselData.json";


function App() {
  return (
    <div className='photo'>
      <div className="content">
        <Carousel data={packageInfo.slides} />
        <Gallery data={packageInfo.slides}/>
      </div>
    </div>

  );
}

export default App;