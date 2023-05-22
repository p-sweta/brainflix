import "./Main.scss";
import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import videosData from "../../data/video-details.json";
import Comments from "../Comments/Comments";
import SideVideosList from "../SideVideosList/SideVideosList";
import { useState } from "react";

const Main = () => {
  //   console.log(videos[0]);
  console.log(videosData[0]);

  const [currVideo, setCurrVideo] = useState(videosData[0]);

  const changeCurrVideo = (id) => {
    const current = videosData.find((video) => video.id === id);
    setCurrVideo(current);
  };

  return (
    <main className="main">
      <Video currVideo={currVideo} />
      <div className="details-container">
      <div className="details-container__left">
      <VideoDetails currVideo={currVideo} />
      <Comments currVideo={currVideo}  />
      </div>
      <SideVideosList
        data={videosData}
        currVideo={currVideo}
        setCurrVideo={setCurrVideo}
        changeCurrVideo={changeCurrVideo}
      />
      </div>
    </main>
  );
};

export default Main;
