import "./gallery.css"

export const Gallery = ({data}) => {
    return (
        <div className="gallery">
            {data.map((item, idx) => {
                return (
                    <div className="gallery_container">
                        <img src={item.src} key={idx} alt={item.alt} className="gallery_img" />
                    </div>
                )
            })}
        </div>
    )
}