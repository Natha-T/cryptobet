import React from "react";

export default function GoLive() {
  return (
    <div className=" flex justify-between m-4   pt-10 ">
      <form className="w-3/4">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only w-full dark:text-gray-300">
          Searchgdg
        </label>
        <div className=" relative  ">
          <input
            type="search"
            id="default-search"
            className="block p-4 rounded-sm  w-full text-xl font bold "
            placeholder="League of Legends Mid Season Invitational 2023"
            required
          />
          <button
            type="submit"
            className="text-white right-2.5 bottom-2.5  absolute bg-gray-700  px-4 py-3"
          >
            Edit
          </button>
        </div>
      </form>

      <button className="bg-[#d10a0a] px-6 py-2 rounded-md text-white ">
        GO LIVE
      </button>
    </div>
  );
}
