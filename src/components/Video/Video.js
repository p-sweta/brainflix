import "./Video.scss";
// import play from "../../assets/icons/play.svg";

const Video = ({currVideo}) => {
  return (
    <section className="hero__video-container">
      <video className="hero__video" poster={currVideo.image} controls>
        {/* <source src={props.video.video} /> */}
      </video>
    </section>
  );
};

export default Video;
