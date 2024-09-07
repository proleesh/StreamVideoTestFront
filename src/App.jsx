import "./App.css";
import VideoUpload from "./assets/components/VideoUpload";

function App() {
  return (
    <>
      <div className="flex flex-col items-center space-y-5 justify-center py-9">
        <h1 className="text-5xl font-bold text-gray-700 dark:text-gray-100">
          Proleesh SVS
        </h1>
        <VideoUpload />
      </div>
    </>
  );
}

export default App;
