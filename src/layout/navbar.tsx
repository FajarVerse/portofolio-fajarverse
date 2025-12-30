"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import myLogo from "../../public/image/logo.png";
import { Languages, TextAlignJustify, X } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { usePathname, useRouter } from "next/navigation";

import { useLocale } from "next-intl";
import { BtnLocalization } from "@/components/main/btn-localizaction";

type MenuItem = {
  label: string;
  url: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [position, setPosition] = useState("bottom");

  const menuItems: MenuItem[] = [
    { label: "Home", url: "#home" },
    { label: "About", url: "#about" },
    { label: "Projects", url: "#projects" },
    { label: "Experience", url: "#experience" },
    { label: "Contact", url: "#contact" },
  ];

  const handleSwitchLocale = (nextLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;

    console.log("switching");
    router.push(segments.join("/"));
  };

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
            <BtnLocalization />
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
          isOpen ? "visible opacity-100 z-99" : "invisible opacity-0 z-0"
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
        <div
          className={`absolute bottom-12 flex gap-2 items-center md:bottom-14 md:gap-2.5 ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          } transition-all duration-300 ease-in-out delay-75`}
        >
          <Languages className="size-5 md:size-7" />
          <div className=" flex gap-2 items-center md:gap-3">
            <button
              className={`font-manrope font-semibold text-xl md:text-2xl ${
                locale == "en" ? "text-primary" : "text-muted-foreground"
              }`}
              disabled={locale == "en" ? true : false}
              onClick={() => handleSwitchLocale("en")}
            >
              English
            </button>
            <div className="h-7 w-[0.15rem] bg-primary rounded-full md:h-8" />
            <button
              className={`font-manrope font-semibold text-xl md:text-2xl ${
                locale == "id" ? "text-primary" : "text-muted-foreground"
              }`}
              disabled={locale == "id" ? true : false}
              onClick={() => handleSwitchLocale("id")}
            >
              Indonesia
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
