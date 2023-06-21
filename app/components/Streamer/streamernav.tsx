import React from "react";

export default function StreamerNav() {
  return (
    <nav className="flex text-gray-200 pb-12 bg-slate-800 gap-16 px-8 pt-16 text-2xl ">
      <a
        href="/streamer/stream-analysis"
        className=" text-center  font-semibold"
      >
        Stream Analysis
      </a>
      <a href="/streamer/setting" className=" text-center  font-semibold">
        Settings
      </a>
      <a href="/streamer/link" className=" text-center  font-semibold">
        Link
      </a>
      <a href="/streamer/live" className=" text-center  font-semibold">
        Live
      </a>
    </nav>
  );
}
