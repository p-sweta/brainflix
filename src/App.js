import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/video/:videoId" element={<HomePage />}/>
        <Route path="/upload" element={<UploadPage />}/>
      </Routes>
      </BrowserRouter>
      {/* <Main /> */}
    </div>
  );
}

export default App;
