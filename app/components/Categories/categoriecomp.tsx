import React from "react";
import CategorieCard from "./categoriecard";
export default function CategorieComp() {
  return (
    <main className=" pb-16  bg-[#D1B00A]">
      <h1 className="text-4xl pl-4 font-normal underline font-armata  pt-4">
        Browse Categorie:
      </h1>
      <div className="grid grid-cols-4 gap-8 pt-16 mx-auto container">
        <CategorieCard />
        <CategorieCard />
        <CategorieCard />
        <CategorieCard />
      </div>
      <div className="pt-10  flex justify-center">
        <button className="px-5 py-3 bg-black text-white ">
          {" "}
          More Categories
        </button>
      </div>
    </main>
  );
}
