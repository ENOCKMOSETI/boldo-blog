"use client";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CallToAction from "./components/callToAction";
import Footer from "./components/footer";
import News from "./components/news";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center container">
        <Hero />
        <div
          style={{
            border: "0.5px solid black",
            margin: "2rem auto",
          }}
        ></div>
        <News />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
