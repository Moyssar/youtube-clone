import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoSection from "./Components/VideosSection/VideoSection";
import YourChannel from "./Components/YourChannel/YourChannel";
import YouTubeStudio from "./Components/YouTubeStudio/YouTubeStudio";
import YourData from "./Components/YourData/YourData";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route exact path="/" Component={VideoSection} />
            <Route path="/YourChannel" Component={YourChannel} />
            <Route path="/YouTubeStudio" Component={YouTubeStudio} />
            <Route path="/YourData" Component={YourData} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
