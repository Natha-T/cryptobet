import React from "react";
import GoLive from "./golive";
import Video from "./video";
import PoolTotal from "./pooltotal";
import Chat from "./chat";
import Ad from "./ad";

export default function Header() {
  return (
    <div className="p-3 bg-gray-800  ">
      <GoLive />
      <div className="flex">
        <div className="grid gap-4  p-4 w-3/4">
          {" "}
          <Video />
          <Ad />
        </div>
        <div className="grid gap-4 max-h-0 p-4 w-1/4">
          <PoolTotal />
          <Chat />
        </div>
      </div>
    </div>
  );
}
