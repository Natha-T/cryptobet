import React from "react";
import BetsCard from "./betscard";

export default function Bets() {
  return (
    <main className="m-6 ">
      <h1 className="text-4xl pl-4 font-normal underline font-armata ">
        Current Bets
      </h1>
      <div className="grid gap-4 grid-cols-4 pt-6">
        <BetsCard />
        <BetsCard />
        <BetsCard />
        <BetsCard />
      </div>
    </main>
  );
}
