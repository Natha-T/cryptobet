import React from "react";

export default function StreamVideo() {
  return (
    <div className=" h-[531px]  bg-[#D9D9D9] rounded-10">
      {" "}
      <video>
        <source className="  bg-[#D9D9D9] rounded-10" src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
