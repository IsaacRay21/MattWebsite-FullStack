import './App.css';
import { Carousel } from "./components/carousel.jsx";
import packageInfo from "./data/carouselData.json";


function App() {
  return (
    <div className="App">
      <Carousel data={packageInfo.slides} />
    </div>

  );
}

export default App;