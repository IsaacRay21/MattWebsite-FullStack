import "./css/gallery.css"
import {useState} from 'react'
import FullscreenImage from "./fullscreenImage"

export const Gallery = ({data}) => {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    return (
        <div className="gallery-container">
            {data.map((item, idx) => {
                return (
                    <div className="gallery_container">
                        <img 
                            src={item.src} 
                            key={idx} 
                            alt={item.alt} 
                            className="gallery_img" 
                            onClick={() => setFullscreenImage(item.src)}/>
                    </div>
                )
            })}

            {fullscreenImage && (
                <FullscreenImage
                src={fullscreenImage}
                onClose={() => setFullscreenImage(null)}
                />
            )}
        </div>

    )
}