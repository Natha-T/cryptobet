import React from "react";
import PopularCard from "./popularcard";
import bg from "../../../public/bg.jpg";
export default function PopularComp() {
  return (
    <main
      className="m-6 border-b-4 border-black pb-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-4xl pl-4 font-normal underline font-armata ">
        Most Popular
      </h1>
      <div className="grid gap-4 grid-cols-4 pt-6">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </main>
  );
}
