import "./SideVideosList.scss";
import VideoCard from "../VideoCard/VideoCard";
import { NavLink } from "react-router-dom";

const SideVideosList = ({ videosData, currVideo }) => {
  return (
    <aside className="videolist">
      <h3 className="videolist__heading section__heading">NEXT VIDEOS</h3>
      <ul className="videolist__videos">
        {videosData.map((video) => {
          if (video !== currVideo) {
            return (
              <NavLink to={`/video/${video.id}`}>
              <li className="videolist__item" 
              key={video.id}>
              <VideoCard
                title={video.title}
                channel={video.channel}
                image={video.image}
                // handleSelect={() => changeCurrVideo(video.id)}
              />
              </li>
              </NavLink>
            );
          }
        })}
      </ul>
    </aside>
  );
};

export default SideVideosList;
