"use client";
import { useRef, useState } from "react";
import YtTwoWindows from "../components/yt-two-windows";
import YtOneWindows from "../components/yt-one-windows";
import YtThreeWindows from "@/components/yt-three-windows";
import YtFourWindows from "@/components/yt-four-widonws";
import YtFiveWindows from "@/components/yt-five-widonws";
import YtSixWindows from "@/components/yt-six-windows";

const extractYouTubeID = (url) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|live\/)|youtu\.be\/)([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export default function Home() {
  const inputRef = useRef(null);
  const [videoIds, setVideoIds] = useState([]);

  const handleAddVideoIds = (e) => {
    e.preventDefault();
    const currentVideoId = extractYouTubeID(inputRef.current.value);
    if (currentVideoId && videoIds.length < 6) {
      const newVideoIds = [...videoIds, currentVideoId];
      setVideoIds(newVideoIds);
      console.log(newVideoIds);
      inputRef.current.value = "";
    }
  };

  if (videoIds.length == 1) {
    return (
      <div className="flex flex-col items-center">
        <YtOneWindows videoIds={videoIds} />
        <form onSubmit={handleAddVideoIds}>
          <input
            placeholder="動画のURLを入力"
            className="focus:outline-none bg-orange-200 mr-4 p-2 rounded-md"
            ref={inputRef}
          ></input>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300">
            追加
          </button>
        </form>
      </div>
    );
  } else if (videoIds.length == 2) {
    return (
      <div className="flex flex-col items-center">
        <YtTwoWindows videoIds={videoIds} />
        <form onSubmit={handleAddVideoIds}>
          <input
            placeholder="動画のURLを入力"
            className="focus:outline-none bg-orange-200 mr-4 p-2 rounded-md"
            ref={inputRef}
          ></input>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300">
            追加
          </button>
        </form>
      </div>
    );
  } else if (videoIds.length == 3) {
    return (
      <div className="flex flex-col items-center">
        <YtThreeWindows videoIds={videoIds} />
        <form onSubmit={handleAddVideoIds}>
          <input
            placeholder="動画のURLを入力"
            className="focus:outline-none bg-orange-200 mr-4 p-2 rounded-md"
            ref={inputRef}
          ></input>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300">
            追加
          </button>
        </form>
      </div>
    );
  } else if (videoIds.length == 4) {
    return (
      <div className="flex flex-col items-center">
        <YtFourWindows videoIds={videoIds} />
        <form onSubmit={handleAddVideoIds}>
          <input
            placeholder="動画のURLを入力"
            className="focus:outline-none bg-orange-200 mr-4 p-2 rounded-md"
            ref={inputRef}
          ></input>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300">
            追加
          </button>
        </form>
      </div>
    );
  } else if (videoIds.length == 5) {
    return (
      <div className="flex flex-col items-center">
        <YtFiveWindows videoIds={videoIds} />
        <form onSubmit={handleAddVideoIds}>
          <input
            placeholder="動画のURLを入力"
            className="focus:outline-none bg-orange-200 mr-4 p-2 rounded-md"
            ref={inputRef}
          ></input>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300">
            追加
          </button>
        </form>
      </div>
    );
  } else if (videoIds.length == 6) {
    return (
      <div className="flex flex-col items-center">
        <YtSixWindows videoIds={videoIds} />
        <form onSubmit={handleAddVideoIds}>
          <input
            placeholder="動画のURLを入力"
            className="focus:outline-none bg-orange-200 mr-4 p-2 rounded-md"
            ref={inputRef}
          ></input>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300">
            追加
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-end h-screen p-6">
        <form onSubmit={handleAddVideoIds}>
          <input
            placeholder="YouTubeのURLを入力"
            className="focus:outline-none bg-orange-200 mr-4 p-2 rounded-md"
            ref={inputRef}
          ></input>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-300">
            追加
          </button>
        </form>
      </div>
    );
  }
}
