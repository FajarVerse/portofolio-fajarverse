"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import About from "@/page/about";
import Contact from "@/page/contact";
import Experience from "@/page/experince";
import Home from "@/page/home";
import Project from "@/page/project";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      <AnimatedThemeToggler className="fixed bottom-10 right-5 z-40 rounded-full p-2 bg-background shadow-[0_0px_6px_0.5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_3px_rgba(255,255,255,0.2)] md:bottom-14 md:right-10 lg:hidden" />
    </>
  );
}
