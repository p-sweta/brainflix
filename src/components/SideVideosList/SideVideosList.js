import "./SideVideosList.scss";
import VideoCard from "../VideoCard/VideoCard";

const SideVideosList = ({ data }) => {
  console.log(data);
  return (
    <aside className="videolist">
        <h3 className="videolist__heading">NEXT VIDEOS</h3>
      <VideoCard videoSingle={data[1]} />
      <VideoCard videoSingle={data[1]} />
    </aside>
  );
};

export default SideVideosList;
