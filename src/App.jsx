import { Toaster } from "react-hot-toast";
import "./App.css";
import VideoUpload from "./assets/components/VideoUpload";
import { useState } from "react";

function App() {
  const [videoId, setVideoId] = useState(
    "cf890bf6-cfd5-4c90-832d-1e46592f5dad"
  );
  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-5 justify-center py-9">
        <h1 className="text-5xl font-bold text-gray-700 dark:text-gray-100">
          Proleesh SVS
        </h1>

        <div className="flex mt-14 w-full justify-around">
          <div>
            <h1 className="text-black">Playing Video</h1>
            <video
              style={{
                width: 500,
              }}
              src={`http://localhost:8080/api/v1/videos/stream/${videoId}`}
              controls
            ></video>
          </div>
          <VideoUpload />
        </div>
      </div>
    </>
  );
}

export default App;
