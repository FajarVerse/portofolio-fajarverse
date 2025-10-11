"use client";

import Navbar from "@/components/main/navbar";
import About from "@/page/about";
import Home from "@/page/home";
import Project from "@/page/project";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
    </>
  );
}
