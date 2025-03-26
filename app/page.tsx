"use client";

import { useRef } from "react";
import Footer from "./components/navigation/Footer";
import Hero from "./components/navigation/sections/Hero";
import Prices from "./components/navigation/sections/Prices";
import "../app/globals.css";
import Infographic from "./components/navigation/sections/Infographic";


export default function Home() {
    const pricesRef = useRef<HTMLDivElement>(null);
  
  return (
    <>
      <div className="w-screen h-fit bg-[url('/images/background.jpg')] bg-cover bg-center bg-no-repeat top-0 z-0">
      <Hero pricesRef={pricesRef} />
      </div>
      <div className="w-screen pt-12 bg-[url('/images/secondBackground.png')] bg-cover bg-center bg-no-repeat">
      <Prices pricesRef={pricesRef} />
      <Footer />
      </div>
    </>
  );
}
