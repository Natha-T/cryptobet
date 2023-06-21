import React from "react";

export default function Chat() {
  return (
    <div className="  ">
      <h1 className="text-center text-white font-bold"> Stream Chat</h1>
      <div className=" h-[533px] border-2 content-end bg-slate-500">
        <form className="grid ">
          <div className=""></div>
          <input className="border-2 border-gray-700 bg-white h-10 px-5 pr-16  text-sm focus:outline-none" />
          <button type="submit" className="   bg-gray-300 px-2 py-2">
            Chat
          </button>
        </form>
      </div>
    </div>
  );
}
