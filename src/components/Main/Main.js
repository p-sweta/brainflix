import "./Main.scss";
import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
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
    const getData = async () => {
      try {
        const videoDataResponse = await axios.get(
          `${api_url}/videos?api_key=${api_key}`
        );
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
            `${api_url}/videos/${selectedVideo}?api_key=${api_key}`
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
          />
        </div>
      </main>
    </>
  );
};

export default Main;
