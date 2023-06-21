import Image from "next/image";
import About from "./components/Home//about";
import Navbar from "./components/global/navbar";
import Header from "./components/Home/header";
import PopularComp from "./components/Popular/popularcomp";
import Bets from "./components/Home/bets";
import CategorieComp from "./components/Categories/categoriecomp";
import bg from "../public/bg.jpg";
export default function Home() {
  return (
    <main className=" ">
      <Navbar />
      <Header />

      <PopularComp />
      <Bets />
      <CategorieComp />
      <About />
    </main>
  );
}
