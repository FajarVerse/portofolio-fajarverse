import { Clock, Github, Play } from "lucide-react";
import Link from "next/link";
import BtnCard from "./btn-card";

interface CardProjectProps {
  children: React.ReactNode;
}

interface CardLeftContent {
  image: string;
}

interface CardRightContent {
  title: string;
  children: React.ReactNode;
  stacks: string[];
  liveUrl: string;
  repoUrl: string;
  status: boolean;
}

const CardProject = ({ children }: CardProjectProps) => {
  return (
    <div className="w-full lg:flex lg:gap-6 xl:gap-8 2xl:gap-9">{children}</div>
  );
};

const CardLeftContent = ({ image }: CardLeftContent) => {
  return (
    <div
      className="w-full h-64 bg-cover bg-center md:h-96 lg:w-1/2 lg:h-64 xl:h-72 2xl:h-80"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

const CardRightContent = ({
  title,
  children,
  stacks,
  liveUrl,
  repoUrl,
  status,
}: CardRightContent) => {
  return (
    <>
      <div className="w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
        <div className="w-full">
          <div className="w-full mt-3.5 lg:mt-0">
            <h2 className="font-mono font-bold text-lg text-primary md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl">
              {title}
            </h2>
            <p className="font-sans font-medium text-sm text-primary md:text-base md:mt-1.5 lg:text-sm xl:text-base 2xl:mt-2">
              {children}
            </p>
          </div>
          <div className="w-full mt-3 flex gap-2.5 md:mt-3.5 md:gap-3.5 lg:mt-3 lg:gap-2.5 xl:gap-3 xl:mt-3.5">
            {stacks.length > 0 &&
              stacks.map((stack, i) => (
                <BtnCard
                  key={i}
                  className="text-primary hover:bg-primary hover:text-background"
                >
                  {stack}
                </BtnCard>
              ))}
          </div>
        </div>

        <div className="w-full">
          {status ? (
            <div className="w-full mt-4 flex gap-2.5 md:mt-6 md:gap-3.5 lg:gap-2.5 xl:gap-3.5">
              <Link href={liveUrl}>
                <BtnCard className="py-2 bg-primary text-background hover:bg-background hover:text-primary flex items-center justify-center gap-1.5 cursor-pointer md:py-2.5 lg:py-2 xl:py-2.5">
                  <Play className="size-4 xl:size-5" />
                  Live Preview
                </BtnCard>
              </Link>
              <Link href={repoUrl}>
                <BtnCard className="py-2 bg-background text-primary hover:bg-primary hover:text-background flex items-center justify-center gap-1.5 cursor-pointer md:py-2.5 lg:py-2 xl:py-2.5">
                  <Github className="size-4 xl:size-5" />
                  Repository
                </BtnCard>
              </Link>
            </div>
          ) : (
            <div className="w-full">
              <BtnCard className="py-3 bg-muted-foreground text-background flex items-center justify-center gap-1.5 md:py-2.5 lg:py-2 xl:py-2.5">
                <Clock className="size-4 xl:size-5" />
                in Progress
              </BtnCard>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

CardProject.LeftContent = CardLeftContent;
CardProject.RightContent = CardRightContent;

export default CardProject;
