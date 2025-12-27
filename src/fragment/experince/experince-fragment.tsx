"use client";

import Header from "@/components/main/header";
import AuthLayout from "@/layout/auth-layout";
import TimelineJourney from "./timeline-journey";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import experienceImag1 from "../../../public/image/experience/Gifari Fajar Maulana_digital_hero_certificate.png";
import databaseAdministratorCertificateImg from "../../../public/image/experience/sertifikasi_database_administrator.png";
import certificateAppMultiplatform1 from "../../../public/image/experience/sertifikat_AI_Multi-platform_App_Developer_Bootcamp_1.png";
import certificateAppMultiplatform2 from "../../../public/image/experience/sertifikat_AI_Multi-platform_App_Developer_Bootcamp_2.png";

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
            <div className="w-full grid grid-cols-1 gap-2.5 mt-3 md:grid-cols-2 lg:mt-5 lg:gap-3.5 xl:gap-4 xl:mt-6">
              <Image
                src={experienceImag1}
                alt={"Sertifikat Digital Hero"}
                className="w-full h-44 bg-primary xl:h-44 2xl:h-52 border-2 border-muted-foreground"
              />
            </div>
          </div>
        </>
      ),
    },

    {
      title: "25 Agustus 2025",
      content: (
        <>
          <div>
            <h4 className="font-mono font-bold text-primary text-base md:text-lg lg:text-[1.2rem] xl:text-2xl">
              Database Administrator Certification
            </h4>
            <p className="font-sans font-medium text-muted-foreground text-sm mt-1.5 lg:text-base xl:text-lg">
              Successfully pass the Database Administrator certification by
              completing practical questions on database management using SQL
              Server, including writing SQL queries, data processing, and
              applying database management concepts.
            </p>
            <div className="w-full grid grid-cols-1 gap-2.5 mt-3 md:grid-cols-2 lg:mt-5 lg:gap-3.5 xl:gap-4 xl:mt-6">
              <Image
                src={databaseAdministratorCertificateImg}
                alt={"Sertifikat Digital Hero"}
                className="w-full h-auto bg-primary xl:h-auto 2xl:h-auto border-2 border-muted-foreground"
              />
            </div>
          </div>
        </>
      ),
    },

    {
      title: "26 Desember 2025",
      content: (
        <>
          <div>
            <h4 className="font-mono font-bold text-primary text-base md:text-lg lg:text-[1.2rem] xl:text-2xl">
              AI Multi-platform App Developer Bootcamp
            </h4>
            <p className="font-sans font-medium text-muted-foreground text-sm mt-1.5 lg:text-base xl:text-lg">
              Graduated from the AI ​​Multi-platform App Developer bootcamp
              organized by IDCamp (Indosat Ooredoo Hutchison Digital Camp),
              which includes three main classes, namely Learning AI Basics,
              Starting Programming with Dart, and Learning to Create Flutter
              Applications for Beginners, with a focus on understanding the
              basic concepts of Artificial Intelligence and developing
              multiplatform mobile applications using Flutter.
            </p>
            <div className="w-full grid grid-cols-1 gap-2.5 mt-3 md:grid-cols-2 lg:mt-5 lg:gap-3.5 xl:gap-4 xl:mt-6">
              <Image
                src={certificateAppMultiplatform1}
                alt={"Sertifikat Digital Hero"}
                className="w-full h-44 bg-primary xl:h-44 2xl:h-52 border-2 border-muted-foreground"
              />
              <Image
                src={certificateAppMultiplatform2}
                alt={"Sertifikat Digital Hero"}
                className="w-full h-44 bg-primary xl:h-44 2xl:h-52 border-2 border-muted-foreground"
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
