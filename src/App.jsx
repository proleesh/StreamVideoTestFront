import { Toaster } from "react-hot-toast";
import "./App.css";
import VideoUpload from "./components/VideoUpload";
import VideoPlayer from "./components/VideoPlayer";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
// import { useState } from "react";

function App() {
  const [fieldValue, setFieldValue] = useState(null);
  const [videoId, setVideoId] = useState(
    "6ba38b3c-4505-4c80-b8b1-08e9a473bedb"
  );
  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center py-9">
        <h1 className="text-5xl font-bold text-gray-700 dark:text-gray-100">
          Proleesh SVS
        </h1>

        <div className="flex mt-14 w-full space-x-2 justify-between">
          <div className="w-full">
            <h1 className="text-black text-center mt-2">Playing Video</h1>
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
            <div>
              <VideoPlayer
                src={`http://localhost:8080/api/v1/videos/${videoId}/master.m3u8`}
              ></VideoPlayer>
            </div>
          </div>
          <div className="w-full">
            <VideoUpload />
          </div>
        </div>

        <div className="my-4 flex  space-x-4">
          <TextInput
            onClick={(event) => {
              setFieldValue(event.target.value);
            }}
            placeholder="Enter video id here"
            name="video_id_field"
          />
          <Button
            onClick={() => {
              setVideoId(fieldValue);
            }}
          >
            Play
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
