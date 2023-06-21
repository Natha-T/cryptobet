import React from "react";
import Header from "../../components/Streamer/Live/header";
import Content from "../../components/Streamer/Live/content";

import Footer from "../../components/global/footer";
export default function page() {
  return (
    <main className="bg-slate-800 h-screen">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
