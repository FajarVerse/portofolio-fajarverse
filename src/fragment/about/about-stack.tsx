"use client";

import CardStack from "@/components/main/card-stack";
import SubHeader from "@/components/main/sub-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { useTranslations } from "next-intl";
import {
  siCss,
  siHtml5,
  siJavascript,
  siLaravel,
  SimpleIcon,
  siMysql,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

type Stack = {
  name: string;
  color: string;
  icon: SimpleIcon;
};

const stacks: Stack[] = [
  {
    name: "HTML5",
    color: "#E34F26",
    icon: siHtml5,
  },
  {
    name: "CSS3",
    color: "#663399",
    icon: siCss,
  },
  {
    name: "Javascript",
    color: "#F7DF1E",
    icon: siJavascript,
  },
  {
    name: "Typescript",
    color: "#3178C6",
    icon: siTypescript,
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    icon: siTailwindcss,
  },
  {
    name: "React.js",
    color: "#61DAFB",
    icon: siReact,
  },
  {
    name: "Laravel",
    color: "#FF2D20",
    icon: siLaravel,
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: siMysql,
  },
];

const AboutStack = () => {
  const t = useTranslations("AboutSection");

  return (
    <>
      <BlurFade inView={true} direction={"up"} offset={10} duration={1}>
        <div className="w-full mt-3 lg:mt-5 xl:mt-8">
          <SubHeader>{t("subTitle")}</SubHeader>
          <div className="w-full mt-3 xl:mt-4 relative">
            <Marquee pauseOnHover className="[--duration:5s]">
              {stacks.length > 0 &&
                stacks.map((stack, i) => (
                  <CardStack
                    key={i}
                    name={stack.name}
                    color={stack.color}
                    icon={stack.icon}
                  />
                ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
          </div>
        </div>
      </BlurFade>
    </>
  );
};

export default AboutStack;
