import React from "react";

export default function UserInfo() {
  return (
    <div className="bg-slate-800 border-2  border-gray-500 ">
      <div className=" bg-slate-800 ">
        {" "}
        <form className="mx-16  text-gray-200">
          <div className="space-y-12 w-full">
            {" "}
            <div className="flex justify-between pt-16">
              <h1>Username: </h1>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered input-warning w-1/2"
              />
            </div>
            <div className="flex justify-between">
              {" "}
              <h1>Bio: </h1>
              <input
                type="text"
                placeholder="Bio"
                className="input input-bordered input-warning w-1/2"
              />
            </div>
            <div className="flex justify-between">
              {" "}
              <h1>Wallet Information </h1>
              <input
                type="text"
                placeholder="Wallet Information"
                className="input input-bordered input-warning w-1/2"
              />
            </div>
            <div className="flex justify-between">
              {" "}
              <h1>LChange Password </h1>
              <input
                type="text"
                placeholder="Change Password"
                className="input input-bordered input-warning w-1/2"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="w-full flex pb-4 px-4 justify-between">
        <button className="bg-[#a53926] px-6 py-2 mt-10 rounded-md text-white ">
          Cancel
        </button>
        <button className="bg-[#93ADAE] px-6 py-2 mt-10 rounded-md text-white ">
          Save Changes
        </button>
      </div>
    </div>
  );
}
