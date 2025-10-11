"use client";

import { useState } from "react";
import { SimpleIcon } from "simple-icons";

interface CardStackProps {
  name: string;
  color: string;
  icon: SimpleIcon;
}

const CardStack = ({ name, color, icon }: CardStackProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        className={`flex gap-2 px-5 py-2 bg-background w-fit items-center lg:px-6 lg:py-2 justify-center border lg:border-2 xl:px-7 xl:py-3 2xl:px-8 transition-all duration-300 ease-in-out select-none`}
        style={{
          borderColor: !isHover ? color : "transparent",
          backgroundColor: isHover ? color : "transparent",
        }}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={!isHover ? color : "#FFFFFF"}
          className="size-3.5 lg:size-5 xl:size-6 transition-all duration-300 ease-in-out"
        >
          <title>{icon.title}</title>
          <path d={icon.path} />
        </svg>
        <p
          className="font-sans font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl duration-300 transition-all ease-in-out"
          style={{ color: !isHover ? color : "#FFFFFF" }}
        >
          {name}
        </p>
      </div>
    </>
  );
};

export default CardStack;
