"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import myLogo from "../../public/image/logo.png";
import { TextAlignJustify, X } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";

type MenuItem = {
  label: string;
  url: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  const menuItems: MenuItem[] = [
    { label: "Home", url: "#home" },
    { label: "About", url: "#about" },
    { label: "Projects", url: "#projects" },
    { label: "Experience", url: "#experience" },
    { label: "Contact", url: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbarRef.current?.classList.remove("navbar-inactive");
        navbarRef.current?.classList.add("navbar-active");
      } else {
        navbarRef.current?.classList.remove("navbar-active");
        navbarRef.current?.classList.add("navbar-inactive");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(isOpen);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`navbar-inactive fixed px-5 py-3.5 flex items-center justify-between z-50 md:px-10 md:py-4 lg:px-24 xl:px-32 2xl:px-44 bg-transparent transition-all duration-300 ease-in-out`}
      >
        <div className="w-full container flex justify-between mx-auto">
          <Image
            src={myLogo}
            alt="logo"
            className="w-10 h-10 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-11 xl:h-11"
          />

          <ul className="hidden lg:flex lg:gap-5 xl:gap-10 2xl:gap-11 items-center">
            {menuItems.map((item, i) => (
              <Link href={item.url} key={i}>
                <li className="font-manrope font-semibold lg:text-base uppercase xl:text-lg 2xl:font-bold">
                  {item.label}
                </li>
              </Link>
            ))}
            <AnimatedThemeToggler />
          </ul>

          <button
            className="text-primary cursor-pointer lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <TextAlignJustify className="size-8 md:size-8 xl:size-12" />
          </button>
        </div>
      </nav>
      <div
        className={`w-full fixed bg-background px-4 left-0 right-0 top-0 bottom-0 flex items-center justify-center ${
          isOpen ? "visible opacity-100 z-[99]" : "invisible opacity-0 z-0"
        } transition-all duration-300 ease-in-out lg:hidden`}
      >
        <X
          className="absolute top-4 right-4 cursor-pointer size-8 md:size-9 md:top-5 md:right-10"
          strokeWidth={3}
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col gap-4">
          {menuItems.map((item, i) => (
            <Link href={item.url} key={i} onClick={() => setIsOpen(false)}>
              <li className="font-extrabold text-4xl font-manrope text-center uppercase">
                <TextAnimate
                  animate="fadeUp"
                  delay={i > 0 ? i * 0.1 : 0}
                  startOnView={isOpen}
                >
                  {item.label}
                </TextAnimate>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
