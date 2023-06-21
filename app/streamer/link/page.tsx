import React from "react";
import LinkDetail from "../../components/Streamer/Link/linkdetail";
import AddLink from "../../components/Streamer/Link/addlink";
import Footer from "../../components/global/footer";
export default function page() {
  return (
    <main>
      {" "}
      <LinkDetail />
      <AddLink /> <Footer />
    </main>
  );
}
