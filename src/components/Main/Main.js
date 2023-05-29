import "./Main.scss";
import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
// import videosData from "../../data/video-details.json";
import Comments from "../Comments/Comments";
import SideVideosList from "../SideVideosList/SideVideosList";
import { useState, useEffect } from "react";
import axios from "axios";
import { api_key, api_url } from "../../utils";
import { useParams } from "react-router-dom";

const Main = () => {
  const { videoId } = useParams();

  const [videosData, setVideosData] = useState([]);
  const firstVideo = videosData.length ? videosData[0].id : null;

  const selectedVideo = videoId ? videoId : firstVideo;

  useEffect(() => {
    axios
      .get(`${api_url}/videos?api_key=${api_key}`)
      .then((res) => {
        setVideosData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [currVideo, setCurrVideo] = useState(null);

  // console.log(videosData[0].id);

  useEffect(() => {
    axios
      .get(`${api_url}/videos/${selectedVideo}?api_key=${api_key}`)
      .then((res) => {
        setCurrVideo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedVideo]);

  if (!currVideo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main className="main">
        <Video currVideo={currVideo} />
        <div className="details-container">
          <div className="details-container__left">
            <VideoDetails currVideo={currVideo} />
            <Comments currVideo={currVideo} />
          </div>

          <SideVideosList
            videosData={videosData}
            currVideo={currVideo}
            setCurrVideo={setCurrVideo}
            // changeCurrVideo={changeCurrVideo}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
