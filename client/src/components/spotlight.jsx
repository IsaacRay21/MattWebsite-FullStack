import "./spotlight.css"
import packageInfo from "../data/carouselData.json";
import { Carousel } from "./carousel"

export const Spotlight = () => {
    return (
        <div className="spotlight">
            <div className="story_carousel">
                <Carousel data={packageInfo.slides}/>
            </div>
            <div className="story">
                <h1>Title</h1>
                <p>WASHINGTON—Flailing their arms and crying out in anguish, Eric Trump and Donald Trump Jr. were reportedly panicking Thursday after getting their tongues stuck to a frozen column near the West Wing of the White House. “Oh my God, it’s thtuck, it’s thtuck!” said Don Jr., the eldest Trump boy, who blamed his brother Eric for the dare gone wrong, shouting, “Thith ith all your fault!” and attempting to kick him in the shins from the awkward angle at which he was fastened to the icy building. “We’re going to die out here! We’re going to thtarve to death! Are you happy, Eric? You wanted to know what the White Houthe tathted like, and now you know! Whereth Thecret Thervice?! Whereth FEMA?!” At press time, the Trump boys were both seen frantically slapping their tongues with their hands.</p>
            </div>
        </div>
    )
}