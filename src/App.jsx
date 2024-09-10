import { Toaster } from "react-hot-toast";
import "./App.css";
import VideoUpload from "./components/VideoUpload";
import VideoPlayer from "./components/VideoPlayer";
// import { useState } from "react";

function App() {
  // const [videoId, setVideoId] = useState(
  //   "3bd1c7fb-951a-460a-ae33-b431d9879831"
  // );
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
            {/* <video
              id="my-video"
              className="video-js"
              controls
              preload="auto"
              width="640"
              data-setup="{}"
            >
              <source
                // src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`}
                src={`http://localhost:8080/api/v1/videos/3bd1c7fb-951a-460a-ae33-b431d9879831/master.m3u8`}
                type="video/mp4"
              />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that
                <a
                  href="https://videojs.com/html5-video-support/"
                  target="_blank"
                >
                  supports HTML5 video
                </a>
              </p>
            </video> */}
            <VideoPlayer
              src={`http://localhost:8080/api/v1/videos/6ba38b3c-4505-4c80-b8b1-08e9a473bedb/master.m3u8`}
            ></VideoPlayer>
          </div>
          <VideoUpload />
        </div>
      </div>
    </>
  );
}

export default App;
