import "./Video.scss";
// import play from "../../assets/icons/play.svg";

const Video = (props) => {
  return (
    <div className="hero__video-container">
      <video className="hero__video" poster={props.video.image} controls>
        {/* <source src={props.video.video} /> */}
      </video>
    </div>
  );
};

export default Video;
