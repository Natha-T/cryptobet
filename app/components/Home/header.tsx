import React from "react";
import banner from "../../../public/banner.png";

export default function Header() {
  return (
    <div className=" ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h1 className="  sm:text-4xl">
          <span className="block text-6xl pt-12">ESPORTS BETTING APP</span>
        </h1>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 ">
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur. Egestas elit augue amet
              elementum. Morbi vel amet elementum elementum blandit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
