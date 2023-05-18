import './App.scss';
import videos from './data/videos.json';
import videosDetails from './data/video-details.json';
import Header from './components/Header/Header';
import Video from './components/Video/Video';

function App() {
  console.log(videos[0]);
  console.log(videosDetails[0]);
  return (
    <div className="App">
      <Header />
      <Video 
        video = {videosDetails[0]}
      />
    </div>
  );
}

export default App;
