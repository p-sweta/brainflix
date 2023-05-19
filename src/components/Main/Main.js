import './Main.scss';
import Video from '../Video/Video';
import VideoDetails from '../VideoDetails/VideoDetails';
import videosData from '../../data/video-details.json';

const Main = () => {

//   console.log(videos[0]);
  console.log(videosData[0]);
    return (
        <main className='main'>
        <Video 
        video = {videosData[0]}
      />
      <VideoDetails 
        video = {videosData[0]}
      />
      </main>
    )
}

export default Main;