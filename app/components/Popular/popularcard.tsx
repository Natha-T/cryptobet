import React from "react";
import Image from "next/image";
import rec from "../../../public/rec.jpg";
export default function PopularCard() {
  return (
    <div className="p-4 rounded-md bg-[#93ADAE]">
      <div>
        <Image src={rec} width={348} height={215} alt="Picture of the author" />
      </div>

      <div className="text-center">
        <h1 className="text-2xl">LCS 2023</h1>
      </div>

      <div className="flex justify-between text-xl pt-5">
        <p>Current Pool:</p>
        <p>34200 $</p>
      </div>

      <div className="flex justify-between pt-1 text-xl">
        <p>Viewer:</p>
        <p>100 $</p>
      </div>
    </div>
  );
}
