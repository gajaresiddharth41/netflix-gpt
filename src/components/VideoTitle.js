import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview} </p>

      <div className="">
        <button className="bg-white  p-4 px-12  text-lg text-black  rounded-lg hover:bg-opacity-45">
          ▶️play
        </button>
        <button className="mx-2 bg-gray-500  p-4 px-12  text-lg text-white bg-opacity-40 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
}; 

export default VideoTitle;
