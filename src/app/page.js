"use client";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCountdownDone, setIsCountdownDone] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsPageReady(true);
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
      return;
    }

    const onLoad = () => {
      setIsPageReady(true);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    };

    // In case load has already fired
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // Fallback timeout so users aren't blocked on a slow asset
    const timeoutId = setTimeout(onLoad, 3000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    if (isCountdownDone && isPageReady) {
      setIsLoading(false);
    }
  }, [isCountdownDone, isPageReady]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            onComplete={() => {
              setIsCountdownDone(true);
            }}
          />
        )}
      </AnimatePresence>
      <Landing isLoading={isLoading} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default page;
