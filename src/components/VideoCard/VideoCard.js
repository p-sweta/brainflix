import "./VideoCard.scss";

const VideoCard = ({ videoSingle }) => {
  return (
    <div className="sideVideo">
      <div className="sideVideo__image-container">
        <img
          className="sideVideo__image"
          src={videoSingle.image}
          alt="video-poster"
        />
      </div>
      <div className="sideVideo__container">
        <h3 className="sideVideo__title">{videoSingle.title}</h3>
        <h4 className="sideVideo__channel">{videoSingle.channel}</h4>
      </div>
    </div>
  );
};

export default VideoCard;
