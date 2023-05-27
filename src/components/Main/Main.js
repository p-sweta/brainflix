import "./Main.scss";
import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import videosData from "../../data/video-details.json";
import Comments from "../Comments/Comments";
import SideVideosList from "../SideVideosList/SideVideosList";
import { useState, useEffect } from "react";
import axios from "axios";
import { api_key, api_url } from "../../utils";

const Main = () => {
  const [currVideo, setCurrVideo] = useState(videosData[0]);

  const changeCurrVideo = (id) => {
    const current = videosData.find((video) => video.id === id);
    setCurrVideo(current);
  };

  useEffect(() => {
    axios.get(`${api_url}/videos/?api_key=${api_key}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })

  return (
    <main className="main">
      <Video currVideo={currVideo} />
      <div className="details-container">
        <div className="details-container__left">
          <VideoDetails currVideo={currVideo} />
          <Comments currVideo={currVideo} />
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
