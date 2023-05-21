import "./VideoDetails.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import { date } from '../../utils';

const VideoDetails = ({currVideo}) => {
    return (
        <section className="details">
            <h1 className="details__heading">{currVideo.title}</h1>
            <div className="details__container">
                <div className="details__subcontainer-left">
                    <h3 className="details__subheading">By {currVideo.channel}</h3>
                    <p className="details__date">{date(currVideo.timestamp)}</p>
                </div>
                <div className="details__subcontainer-right">
                    <div className="details__views-container">
                        <img className="details__icon" src={viewIcon} alt="eye icon for views" />
                        <p className="details__number">{currVideo.views}</p>
                    </div>
                    <div className="details__likes-container">
                        <img className="details__icon" src={likeIcon} alt="heart icon for likes" />
                        <p className="details__number">{currVideo.likes}</p>
                    </div>
                </div>
            </div>
            <div className="details__description-container">
                <p className="details__description">{currVideo.description}</p>
            </div>
        </section>
    )
}

export default VideoDetails;