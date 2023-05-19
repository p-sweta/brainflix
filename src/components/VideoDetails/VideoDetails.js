import "./VideoDetails.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

const VideoDetails = (props) => {
    return (
        <section className="details">
            <h1 className="details__heading">{props.video.title}</h1>
            <div className="details__container">
                <div className="details__subcontainer-left">
                    <h3 className="details__subheading">{props.video.channel}</h3>
                    <p className="details__date">07 /11 / 2021</p>
                </div>
                <div className="details__subcontainer-right">
                    <div className="details__views-container">
                        <img className="details__icon" src={viewIcon} alt="eye icon for views" />
                        <p className="details__number">{props.video.views}</p>
                    </div>
                    <div className="details__likes-container">
                        <img className="details__icon" src={likeIcon} alt="heart icon for likes" />
                        <p className="details__number">{props.video.likes}</p>
                    </div>
                </div>
            </div>
            <div className="details__description-container">
                <p className="details__description">{props.video.description}</p>
            </div>
        </section>
    )
}

export default VideoDetails;