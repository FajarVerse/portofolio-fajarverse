import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { TextAlignJustify, X } from "lucide-react";
import { TextAnimate } from "../ui/text-animate";
import myLogo from "../../../public/image/logo.png";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Projects", url: "/projects" },
  { label: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 px-5 py-3.5 flex items-center bg-background justify-between z-50 md:px-10 md:py-4 lg:px-24 xl:px-32 2xl:px-40`}
      >
        <Image
          src={myLogo}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-8 lg:h-8 xl:w-11 xl:h-11"
        />

        <ul className="hidden lg:flex lg:gap-5 xl:gap-10 2xl:gap-11 items-center">
          {menuItems.map((item, i) => (
            <Link href={item.url} key={i}>
              <li className="font-manrope font-semibold lg:text-base uppercase xl:text-xl 2xl:font-bold">
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
          <TextAlignJustify className="size-8 md:size-9 xl:size-12" />
        </button>
        <div
          className={`w-full fixed bg-background px-4 left-0 top-0 bottom-0  flex items-center justify-center ${
            isOpen ? "visible opacity-100 z-20" : "invisible opacity-0 z-0"
          } transition-all duration-300 ease-in-out lg:hidden`}
        >
          <AnimatedThemeToggler className="absolute top-4 left-4 md:left-10 md:top-5" />
          <X
            className="absolute top-4 right-4 cursor-pointer size-8 md:size-9 md:top-5 md:right-10"
            strokeWidth={3}
            onClick={() => setIsOpen(!isOpen)}
          />
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, i) => (
              <Link href={item.url} key={i}>
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
      </div>
    </>
  );
};

export default Navbar;
