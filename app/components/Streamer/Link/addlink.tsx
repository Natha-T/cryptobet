import React from "react";

export default function AddLink() {
  return (
    <div className=" p-8 ">
      <form className="bg-gray-500 px-12 py-4">
        <div className="flex mt-4  w-full">
          <h1>Link Tittle: </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full s"
          />
        </div>
        <div className="flex w-full pt-8">
          <h1>Link Tittle: </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-warning w-full"
          />
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#93ADAE] px-6 py-2 mt-10 rounded-md text-white ">
            Add Link
          </button>
        </div>
      </form>
    </div>
  );
}
