import "./SideVideosList.scss";
import VideoCard from "../VideoCard/VideoCard";
import { NavLink } from "react-router-dom";

const SideVideosList = ({ videosData, currVideo }) => {
  return (
    <aside className="videolist">
      <h3 className="videolist__heading section__heading">NEXT VIDEOS</h3>
      <ul className="videolist__videos">
        {videosData.map((video) => {
          if (video.id !== currVideo.id) {
            return (
              <NavLink
                to={`/video/${video.id}`}
                key={video.id}
                className="videolist__link"
              >
                <li className="videolist__item">
                  <VideoCard
                    title={video.title}
                    channel={video.channel}
                    image={video.image}
                  />
                </li>
              </NavLink>
            );
          }
          return null;
        })}
      </ul>
    </aside>
  );
};

export default SideVideosList;
