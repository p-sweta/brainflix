import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import SideVideosList from "../SideVideosList/SideVideosList";
import "./Main.scss";

const Main = () => {
  const { videoId } = useParams();
  const api_url = "http://localhost:8080";

  const [videosData, setVideosData] = useState([]);
  const firstVideo = videosData.length ? videosData[0].id : null;

  const selectedVideo = videoId ? videoId : firstVideo;

  useEffect(() => {
    const getData = async () => {
      try {
        const videoDataResponse = await axios.get(`${api_url}/videos`);
        setVideosData(videoDataResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const [currVideo, setCurrVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedVideo) {
          const videoResponse = await axios.get(
            `${api_url}/videos/${selectedVideo}`
          );
          setCurrVideo(videoResponse.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [selectedVideo]);

  if (!currVideo) {
    return <p>Loading...</p>;
  }

  return (
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
        />
      </div>
    </main>
  );
};

export default Main;
