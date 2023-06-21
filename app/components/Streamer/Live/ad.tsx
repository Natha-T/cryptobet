import React from "react";
import ad from "../../../../public/ad.png";
import Image from "next/image";
export default function Ad() {
  return (
    <div className="w-full ">
      <Image src={ad} alt="Ad" className="w-full" />
    </div>
  );
}
