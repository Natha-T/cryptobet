import React from "react";
import ads from "../../../public/ads.png";
import Image from "next/image";

export default function PubSecond() {
  return (
    <div className="h-full ">
      <Image src={ads} alt="Ad" className="h-full" />
    </div>
  );
}
