import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import AuthLayout from "@/layout/auth-layout";
import Image from "next/image";
import myLogo from "../../public/image/logo.png";
import { HyperText } from "@/components/ui/hyper-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

const HomeFragment = () => {
  return (
    <>
      <AuthLayout
        className="bg-background pt-52 h-screen md:pt-56 lg:pt-52 z-20"
        id="home"
      >
        <TextAnimate
          duration={0.5}
          startOnView={true}
          animation={"blurInDown"}
          className="font-mono font-bold text-xl mb-4 md:font-bold xl:text-xl text-secondary-foreground flex items-end gap-1"
          as={"h3"}
        >
          FajarVerse
        </TextAnimate>

        {/* <h1 className="font-anton font-extrabold text-5xl tracking-wide md:text-6xl lg:text-[3.4rem] xl:text-7xl xl:tracking-wider 2xl:text-[4.7rem]"> */}
        <HyperText
          startOnView={true}
          animateOnHover={false}
          duration={1000}
          className="font-anton font-extrabold text-5xl md:text-6xl lg:text-[3.4rem] xl:text-7xl 2xl:text-[4.8rem]"
        >
          GIFARI FAJAR MAULANA
        </HyperText>
        {/* </h1> */}
        <h2 className="font-anton font-bold text-xl mt-1 mb-4 md:mt-1.5 lg:tracking-wide lg:text-2xl xl:text-[2rem] xl:mb-7 2xl:mb-9">
          <TypingAnimation
            duration={500}
            startOnView={true}
            loop={false}
            as={"span"}
            cursorStyle={"underscore"}
            typeSpeed={50}
            showCursor={false}
            className="relative before:block before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-primary"
          >
            Fullstack
          </TypingAnimation>{" "}
          <TypingAnimation
            duration={500}
            startOnView={true}
            loop={false}
            as={"span"}
            cursorStyle={"underscore"}
            typeSpeed={50}
            delay={500}
            showCursor={false}
          >
            Developer
          </TypingAnimation>
        </h2>
        <div className="w-full md:w-3/4 lg:w-3/5 xl:w-3/4">
          <TextAnimate
            as={"p"}
            duration={0.5}
            startOnView={true}
            animation={"blurInUp"}
            className="font-sans font-medium text-base md:text-lg xl:text-xl text-secondary-foreground"
          >
            Where ideas meet innovation — creating digital products that not
            only work, but provide long-term value and impact.
          </TextAnimate>
        </div>
        <BlurFade inView={true} direction={"up"} duration={0.5} offset={10}>
          <div className="w-full flex gap-4 mt-10 md:gap-6 xl:gap-7 xl:mt-10">
            <Link href={"#projects"}>
              <InteractiveHoverButton className="rounded-none border-1 border-primary xl:text-xl xl:px-10 xl:py-6 xl:border-2 bg-transparent">
                See my works
              </InteractiveHoverButton>
            </Link>
            <Link href={"#contact"}>
              <InteractiveHoverButton className="rounded-none border-1 border-primary xl:text-xl xl:px-10 xl:py-6 xl:border-2 bg-transparent">
                Contact me
              </InteractiveHoverButton>
            </Link>
          </div>
        </BlurFade>
      </AuthLayout>
    </>
  );
};

export default HomeFragment;
