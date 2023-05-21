import "./SideVideosList.scss";
import VideoCard from "../VideoCard/VideoCard";

const SideVideosList = ({ currVideo, data, changeCurrVideo, setCurrVideo }) => {
    
  console.log(data);
  return (
    <aside className="videolist">
      <h3 className="videolist__heading">NEXT VIDEOS</h3>
      {data.map((video) => {
        if (video !== currVideo) {
          return (
            <VideoCard
              key={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
              handleSelect={() => changeCurrVideo(video.id)}
            />
          );
        }
      })}
    </aside>
  );
};

export default SideVideosList;
