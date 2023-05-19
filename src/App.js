import './App.scss';
import videos from './data/videos.json';
import videosData from './data/video-details.json';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoDetails from './components/VideoDetails/VideoDetails';

function App() {
  console.log(videos[0]);
  console.log(videosData[0]);
  return (
    <div className="App">
      <Header />
      <Video 
        video = {videosData[0]}
      />
      <VideoDetails 
        video = {videosData[0]}
      />
    </div>
  );
}

export default App;
