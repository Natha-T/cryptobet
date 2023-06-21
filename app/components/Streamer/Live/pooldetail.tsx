import React from "react";

export default function PoolDetail() {
  return (
    <div className="px-12 py-4 max-h- border-[#D1B00A] border-2 w-full">
      <div className="grid grid-cols-2 w-full">
        <div className="w-1/2  space-y-8 ">
          <div className="grid grid-cols-2 w-full  ">
            <h1>Pool Total:</h1>
            <h1>2.6578.00</h1>
          </div>
          <div className="grid grid-cols-2  w-full  ">
            <h1>Team 1:</h1>
            <h1>25 Bets</h1>
          </div>
          <div className="grid grid-cols-2   ">
            <h1>Team 2:</h1>
            <h1>17 Bets</h1>
          </div>

          <div className="grid grid-cols-2  ">
            <h1>Bet Amount:</h1>
            <h1>25.00$</h1>
          </div>
        </div>
        <div className="w-1/2 space-y-8">
          <div className="flex justify-between">
            <h1>Category:</h1>
            <h1>Valorent</h1>
          </div>

          <div className="flex justify-between">
            <h1>Your Bet Amount:</h1>
            <h1>75.00$</h1>
          </div>

          <div className="flex justify-between">
            <h1>Your Bet Pool</h1>
            <h1>3</h1>
          </div>
        </div>
      </div>

      <div className="  w-full flex justify-end pt-6">
        <button className="px-4  py-3 rounded-lg bg-gray-600">Managee</button>
      </div>
    </div>
  );
}
