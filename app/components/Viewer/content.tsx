import React from "react";
import StreamerLink from "./streamerlink";
import PoolDetail from "./pooldetail";
import PubSecond from "./pubsecond";

export default function Content() {
  return (
    <div className=" bg-gray-800 flex gap-6 p-7">
      <div className="grid space-y-4 w-3/4">
        <StreamerLink />
        <PoolDetail />
      </div>
      <div className="w-1/3">
        <PubSecond />
      </div>
    </div>
  );
}
