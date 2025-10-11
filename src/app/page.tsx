"use client";

import Navbar from "@/components/main/navbar";
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
    </>
  );
}
