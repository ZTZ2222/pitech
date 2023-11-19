"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <Loading setLoading={setLoading} />
        </motion.div>
      ) : (
        <main className="relative overflow-clip">
          <Header />
          <Hero />
          <About />
          <Features />
          <Portfolio />
          <HowItWorks />
          <Contact />
          <Footer />
          <ToastContainer />
        </main>
      )}
    </AnimatePresence>
  );
}
