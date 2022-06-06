// import Head from "next/head";
// import Image from "next/image";

import Shorten from "../components/Shorten";
import Header from "../components/Header";
import Statistics from "../components/Statistics";
import Boost from "../components/Boost";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Shorten />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}
