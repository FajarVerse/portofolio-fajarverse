import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import AuthLayout from "@/layout/auth-layout";
import Image from "next/image";
import myLogo from "../../public/image/logo.png";

const HomeFragment = () => {
  return (
    <>
      <AuthLayout
        className="bg-background pt-52 h-screen md:pt-56 lg:pt-52 z-20"
        id="home"
      >
        <h3 className="font-mono font-bold text-xl mb-4 md:font-semibold xl:text-xl text-secondary-foreground flex items-end gap-1">
          <Image
            src={myLogo}
            alt="logo"
            className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
            priority={true}
          />
          <span>FajarVerse</span>
        </h3>
        <h1 className="font-anton font-extrabold text-5xl md:text-6xl lg:text-[3.4rem] xl:text-7xl xl:tracking-tight 2xl:text-[4.7rem]">
          GIFARI FAJAR MAULANA
        </h1>
        <h2 className="font-anton font-bold text-xl mt-1 mb-4 md:mt-1.5 lg:tracking-wide lg:text-2xl xl:text-[2rem] xl:mb-7 2xl:mb-9">
          <span className="relative before:block before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-primary">
            Fullstack
          </span>{" "}
          <span>Developer</span>
        </h2>
        <div className="w-full md:w-3/4 lg:w-3/5 xl:w-3/4">
          <p className="font-sans font-medium text-base md:text-lg xl:text-xl text-secondary-foreground">
            Where ideas meet innovation — creating digital products that not
            only work, but provide long-term value and impact.
          </p>
        </div>
        <div className="w-full flex gap-4 mt-10 md:gap-6 xl:gap-7 xl:mt-10">
          <InteractiveHoverButton className="rounded-none border-1 border-primary xl:text-xl xl:px-10 xl:py-6 xl:border-2 bg-transparent">
            See my works
          </InteractiveHoverButton>
          <InteractiveHoverButton className="rounded-none border-1 border-primary xl:text-xl xl:px-10 xl:py-6 xl:border-2 bg-transparent">
            Contact me
          </InteractiveHoverButton>
        </div>
      </AuthLayout>
    </>
  );
};

export default HomeFragment;
