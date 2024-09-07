import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import videoLogo from "../upload.png";
import { useState } from "react";
import axios from "axios";
export default function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [meta, setMeta] = useState({
    title: "",
    description: "",
  });
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  function handleFileChange(event) {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  function formFieldChange(event) {
    setMeta({
      ...meta,
      [event.target.name]: event.target.value,
    });
  }

  function handleForm(formEvent) {
    formEvent.preventDefault();
    if (!selectedFile) {
      alert("경고: 파일를 선택하세요!");
      return;
    }
    saveVideoToServer(selectedFile, meta);
  }

  async function saveVideoToServer(video, videoMetaData) {
    setUploading(true);
    try {
      let formData = new FormData();
      formData.append("title", videoMetaData.title);
      formData.append("description", videoMetaData.description);
      formData.append("file", selectedFile);
      let response = await axios.post(
        `http://localhost:8080/api/v1/videos`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            console.log(progressEvent);
            setProgress(progressEvent);
          },
        }
      );
      console.log(response);
      setMessage("File uploaded!!!");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="text-black">
      <Card className="flex flex-col items-center justify-center">
        <h1>동영상 업로드</h1>
        <div>
          <form
            noValidate
            className="flex flex-col space-y-6"
            onSubmit={handleForm}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="동영상 타이틀" />
              </div>
              <TextInput
                onChange={formFieldChange}
                name="title"
                placeholder="타이틀을 쓰세요."
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="동영상 설명" />
              </div>
              <Textarea
                onChange={formFieldChange}
                name="description"
                id="comment"
                placeholder="설명을 쓰세요."
                required
                rows={4}
              />
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <div className="shrink-0">
                <img
                  className="h-16 w-16 object-cover"
                  src={videoLogo}
                  alt="Current profile photo"
                />
              </div>
              <label className="block">
                <span className="sr-only">동영상 파일 선택</span>
                <input
                  name="input"
                  onChange={handleFileChange}
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </div>
            <div className="flex justify-center">
              <Button type="submit">제출</Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
