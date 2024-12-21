"use client";
import { useState } from "react";
import YouTube from "react-youtube";

export default function YtFiveWindows({ videoIds }) {
  const [YTPlayers, setYTPlayers] = useState([]);

  const makeYTPlayers = (e) => {
    const newYTPlayers = [...YTPlayers, e.target];
    setYTPlayers(newYTPlayers);
  };

  const handlePlayVideo = () => {
    YTPlayers.forEach((YTPlayer) => {
      if (YTPlayer.g) {
        YTPlayer.playVideo();
      }
    });
  };

  const handlePauseVideo = () => {
    YTPlayers.forEach((YTPlayer) => {
      if (YTPlayer.g) {
        YTPlayer.pauseVideo();
      }
    });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="h-[calc(100vh-80px-40px)] flex flex-col items-center">
        <div className="flex w-full justify-center">
          <YouTube
            videoId={videoIds[0]}
            onReady={makeYTPlayers}
            opts={{ width: "100%", height: "auto" }}
            className="w-1/3"
            iframeClassName="aspect-video"
          />
          <YouTube
            videoId={videoIds[1]}
            onReady={makeYTPlayers}
            opts={{ width: "100%", height: "auto" }}
            className="w-1/3"
            iframeClassName="aspect-video"
          />
          <YouTube
            videoId={videoIds[2]}
            onReady={makeYTPlayers}
            opts={{ width: "100%", height: "auto" }}
            className="w-1/3"
            iframeClassName="aspect-video"
          />
        </div>
        <div className="flex w-full justify-center">
          <YouTube
            videoId={videoIds[3]}
            onReady={makeYTPlayers}
            opts={{ width: "100%", height: "auto" }}
            className="w-1/3"
            iframeClassName="aspect-video"
          />
          <YouTube
            videoId={videoIds[4]}
            onReady={makeYTPlayers}
            opts={{ width: "100%", height: "auto" }}
            className="w-1/3"
            iframeClassName="aspect-video"
          />
        </div>
      </div>
      <div className="flex items-center py-4 justify-center">
        <button
          className="bg-sky-400 rounded-full p-3 mr-4 hover:bg-sky-300"
          onClick={handlePlayVideo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="bg-sky-400 rounded-full p-3 mr-4 hover:bg-sky-300"
          onClick={handlePauseVideo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
