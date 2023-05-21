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
    setCurrVideo(id);
  }

  return (
    <main className="main">
      <Video currVideo = { currVideo } />
      <VideoDetails currVideo = { currVideo } />
      <Comments currVideo = { currVideo } />
      <SideVideosList 
      data = { videosData }
      currVideo = { currVideo }
      changeCurrVideo = { changeCurrVideo }/>
    </main>
  );
};

export default Main;
