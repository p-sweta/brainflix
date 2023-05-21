import "./VideoCard.scss";

const VideoCard = (props) => {
  return (
    <div className="sideVideo" onClick={props.handleSelect}>
      <div className="sideVideo__image-container">
        <img
          className="sideVideo__image"
          src={props.image}
          alt="video-poster"
        />
      </div>
      <div className="sideVideo__container">
        <h3 className="sideVideo__title">{props.title}</h3>
        <h4 className="sideVideo__channel">{props.channel}</h4>
      </div>
    </div>
  );
};

export default VideoCard;
