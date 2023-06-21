import React from "react";
import Image from "next/image";
import lol from "../../../public/lol.png";
export default function CategorieCard() {
  return (
    <div>
      <Image src={lol} width={375} height={435} alt="Picture of the author" />
    </div>
  );
}
