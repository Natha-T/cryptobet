import React from "react";

export default function Pool() {
  return (
    <div className="border-2 text-center  text-white border-[#D1B00A] ">
      <div className="border-b-2 border-gray-300 pb-2 space-y-2">
        <h1>Pool Total :</h1>
        <p> 2.6784.00</p>
      </div>
      <div className="pt-2">
        <div className="flex   justify-center gap-16">
          <h1>Team 1:</h1>
          <h1>25 Bets</h1>
        </div>
        <div className="flex  justify-center  gap-16">
          <h1>Team 2:</h1>
          <h1>17 Bets</h1>
        </div>
      </div>

      <div className="flex justify-between p-3">
        <button className="bg-[#93ADAE] px-6 py-2 rounded-md text-white ">
          View More
        </button>
        <button className="bg-[#D1B00A] px-6 py-2 rounded-md text-white ">
          Place Bet
        </button>
      </div>
    </div>
  );
}
