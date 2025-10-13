import Header from "@/components/main/header";
import AuthLayout from "@/layout/auth-layout";
import TimelineJourney from "./timeline-journey";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import experienceImag1 from "../../../public/image/experience/Gifari Fajar Maulana_digital_hero_certificate.png";

export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

const ExperienceFragment = () => {
  const data: TimelineEntry[] = [
    {
      title: "Maret - Juni 2025",
      content: (
        <>
          <div>
            <h4 className="font-mono font-bold text-primary text-base md:text-lg lg:text-[1.2rem] xl:text-2xl">
              Software Engineer Intrenship
            </h4>
            <p className="font-sans font-medium text-muted-foreground text-sm mt-1.5 lg:text-base xl:text-lg">
              I transformed Figma designs into responsive interfaces, built
              reusable React.js components, and integrated external APIs. I also
              contributed to the development of Booking and Admin Panels using
              React.js and Tailwind CSS with Git-based collaboration.
            </p>
            <div className="w-full grid grid-cols-2 gap-2.5 mt-3 lg:mt-5 lg:gap-3.5 xl:gap-4 xl:mt-6">
              <Image
                src={experienceImag1}
                alt={"Sertifikat Digital Hero"}
                className="w-full h-32 bg-primary xl:h-44 2xl:h-52 border-2 border-muted-foreground"
              />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <AuthLayout className="pt-32" id="experience">
      <BlurFade inView={true} direction="down" offset={10} duration={0.5}>
        <Header>My Journey</Header>
      </BlurFade>
      <TimelineJourney data={data} />
    </AuthLayout>
  );
};

export default ExperienceFragment;
