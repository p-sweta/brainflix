import "./Video.scss";
// import play from "../../assets/icons/play.svg";

const Video = (props) => {
  return (
    <section className="hero__video-container">
      <video className="hero__video" poster={props.video.image} controls>
        {/* <source src={props.video.video} /> */}
      </video>
    </section>
  );
};

export default Video;
