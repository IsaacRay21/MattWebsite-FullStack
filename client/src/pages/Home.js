import './css/Home.css';
import { Navbar } from "../components/navbar.jsx";

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="content"> 
        <div className='top_pad'></div>
      </div>
    </div>
  )
}

export default Home;