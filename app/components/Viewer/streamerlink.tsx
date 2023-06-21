import React from "react";
import insta from "../../../public/insta.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";
import Twitch from "../../../public/twitch.svg";

export default function StreamerLink() {
  return (
    <div className="px-12 border-2 border-gray-200">
      <div className="border-b-2 pb-4">
        <h1 className="text-center px-32 pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ab blanditiis, omnis corrupti ratione officia dolores consectetur
          aliquid harum, quibusdam, quia voluptatem. Quisquam, voluptatum
        </h1>
      </div>
      <div className="flex justify-between gap-12 w-full">
        {" "}
        <div className="w-1/2 ">
          {" "}
          <h2 className="  pt-2">Streamer Stats</h2>
          <div className="">
            <p>Rank : Gold</p>
            <p>Tier : 3</p>
            <p>Total Win : 15</p>
            <p>Total Loose : 7</p>
          </div>
        </div>{" "}
        <div className="w-1/2">
          <div className="">
            {" "}
            <h2 className=" pt-2">Socials</h2>
            <div className=" flex  gap-4 ">
              <svg
                width="32"
                height="32"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="white"
                />
                <path
                  d="M16.875 3.75L7.5 13.125V46.875H18.75V56.25L28.125 46.875H35.625L52.5 30V3.75H16.875ZM48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="#9146FF"
                />
                <path
                  d="M43.125 14.0625H39.375V25.3125H43.125V14.0625ZM32.8125 14.0625H29.0625V25.3125H32.8125V14.0625Z"
                  fill="#9146FF"
                />
              </svg>

              <svg
                width="32"
                height="32"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="white"
                />
                <path
                  d="M16.875 3.75L7.5 13.125V46.875H18.75V56.25L28.125 46.875H35.625L52.5 30V3.75H16.875ZM48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="#9146FF"
                />
                <path
                  d="M43.125 14.0625H39.375V25.3125H43.125V14.0625ZM32.8125 14.0625H29.0625V25.3125H32.8125V14.0625Z"
                  fill="#9146FF"
                />
              </svg>

              <svg
                width="32"
                height="32"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="white"
                />
                <path
                  d="M16.875 3.75L7.5 13.125V46.875H18.75V56.25L28.125 46.875H35.625L52.5 30V3.75H16.875ZM48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="#9146FF"
                />
                <path
                  d="M43.125 14.0625H39.375V25.3125H43.125V14.0625ZM32.8125 14.0625H29.0625V25.3125H32.8125V14.0625Z"
                  fill="#9146FF"
                />
              </svg>

              <svg
                width="32"
                height="32"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="white"
                />
                <path
                  d="M16.875 3.75L7.5 13.125V46.875H18.75V56.25L28.125 46.875H35.625L52.5 30V3.75H16.875ZM48.75 28.125L41.25 35.625H33.75L27.1875 42.1875V35.625H18.75V7.5H48.75V28.125Z"
                  fill="#9146FF"
                />
                <path
                  d="M43.125 14.0625H39.375V25.3125H43.125V14.0625ZM32.8125 14.0625H29.0625V25.3125H32.8125V14.0625Z"
                  fill="#9146FF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
