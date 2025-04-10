import "./css/about.css"
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa6";


export const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <img className="about-photo" src="https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/a344a218-c5cb-43e6-abc7-6b4dd311fce0/AW5A8534.jpg" alt="about me"></img>

                <div className="about-text">
                    <h1> 
                        ABOUT ME
                    </h1>
                    <p> 
                    My name is Matt Sullivan. I'm a really cool guy and this is my personal website. I'm just your average dude who happens to be awesome at being me. Whether it's cracking jokes, debating the best fast food chain (it's Chick-fil-A, no question), or telling stories about that one crazy road trip I took last summer, I always keep things interesting.

                    I'm into all kinds of stuff - music, movies, sports, tech, you name it. My friends would probably describe me as the guy who's always down for an adventure but also perfectly happy just hanging out and watching the game. I've got strong opinions about unimportant things (yes, Die Hard is a Christmas movie) and I'm not afraid to share them.

                    If you're reading this, we should probably be friends. Or at least have a conversation about why The Office is objectively better than Parks and Rec. I'm always up for meeting new people and hearing new perspectives (even wrong ones, I guess).

                    Feel free to reach out if you want to chat, collaborate, or just argue about whether a hot dog counts as a sandwich. Let's make something cool happen.
                    </p>
                    <div className="social-links">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/matt.c.sullivan/"><FaInstagram></FaInstagram></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/matt.c.sullivan/"><FaYoutube></FaYoutube></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/matt.c.sullivan/"><FaTwitter></FaTwitter></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/matt.c.sullivan/"><FaLinkedin></FaLinkedin></a>
                    </div>
                    <div className="contact-info">
                        <p>999-999-9999</p>
                        <p>mattsullivan@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}