import React from "react";
import AllBets from "./allbets";
import Pool from "./pool";
import Chat from "./chat";
import StreamVideo from "./streamvideo";
import Pub from "./pub";

export default function Header() {
  return (
    <div className="p-3 bg-gray-800  ">
      <AllBets />
      <div className="flex">
        <div className="grid gap-4  p-4 w-3/4">
          <StreamVideo />
          <Pub />
        </div>
        <div className="grid gap-4 max-h-0 p-4 w-1/4">
          <Pool />
          <Chat />
        </div>
      </div>
    </div>
  );
}
