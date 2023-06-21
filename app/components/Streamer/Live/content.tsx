import React from "react";
import AdSecond from "./adsecond";
import PoolDetail from "./pooldetail";
import StreamerStat from "./streamerstat";

export default function Content() {
  return (
    <div className=" bg-gray-800 flex gap-6 p-7">
      <div className="grid space-y-4 w-3/4">
        <StreamerStat />
        <PoolDetail />
      </div>
      <div className="w-1/3">
        <AdSecond />
      </div>
    </div>
  );
}
