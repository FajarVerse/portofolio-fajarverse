"use client";

import Header from "@/components/main/header";
import Navbar from "@/components/main/navbar";
import AuthLayout from "@/layout/auth-layout";
import About from "@/page/about";
import Home from "@/page/home";
import projectTest from "../../public/image/project-test.png";
import Image from "next/image";
import BtnCard from "@/components/main/btn-card";
import { Clock, Github, Play, Terminal } from "lucide-react";
import Link from "next/link";
import CardProject from "@/components/main/cart-project";
import Project from "@/page/project";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      {/* <AuthLayout className="pt-32" id="projects">
        <Header>My Projects</Header>
        <div className="w-full mt-5 grid grid-cols-1 gap-10 md:gap-12 md:mt-8 lg:mt-10 lg:grid-cols-2 lg:gap-5 xl:gap-7 2xl:gap-8">
          <CardProject>
            <CardProject.Header image={projectTest.src} />
            <CardProject.Body title="Lugi Store">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus temporibus earum architecto ipsa! Sit nesciunt culpa
              adipisci odit et.
            </CardProject.Body>
            <CardProject.Footer liveUrl="" repoUrl="" status={true} />
          </CardProject>
          <div className="w-full">
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${projectTest.src})` }}
            ></div>
            <div className="w-full mt-3.5">
              <h2 className="font-mono font-bold text-lg text-primary">
                Lugi Store
              </h2>
              <p className="font-sans font-medium text-sm text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                molestiae tempora voluptatum architecto quidem consequatur ex
                veritatis vel laudantium quaerat.
              </p>
            </div>
            <div className="w-full mt-3 flex gap-2.5">
              <BtnCard className="text-primary hover:bg-primary hover:text-background">
                Next Js
              </BtnCard>
            </div>
            <div className="w-full mt-4 flex gap-2.5">
              <Link href={""}>
                <BtnCard className="py-3 bg-primary text-background hover:bg-background hover:text-primary flex items-center justify-center gap-1.5 cursor-pointer">
                  <Play className="size-4" />
                  Live Preview
                </BtnCard>
              </Link>
              <Link href={""}>
                <BtnCard className="py-3 bg-background text-primary hover:bg-primary hover:text-background flex items-center justify-center gap-1.5 cursor-pointer">
                  <Github className="size-4" />
                  Repository
                </BtnCard>
              </Link>
              <BtnCard className="py-3 bg-muted-foreground text-background flex items-center justify-center gap-1.5">
                <Clock className="size-4" />
                in Progress
              </BtnCard>
            </div>
          </div>
        </div>
      </AuthLayout> */}
    </>
  );
}
