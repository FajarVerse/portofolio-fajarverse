"use client";

import CardProject from "@/components/main/cart-project";
import Header from "@/components/main/header";
import AuthLayout from "@/layout/auth-layout";
import project1 from "../../../public/image/projects/project-1.png";
import project2 from "../../../public/image/projects/project-2.png";
import { BlurFade } from "@/components/ui/blur-fade";
import { useTranslations } from "next-intl";

const projects = [
  {
    id: 1,
    key: "lugiStore",
    title: "Lugi Store (Eccommerce Fashion)",
    stacks: ["React.js", "Laravel", "Tailwind CSS", "Midtrans"],
    liveUrl: null,
    repoUrl: "https://github.com/FajarVerse/fashion_e_commerce.git",
    status: true,
    image: project1.src,
    liveStatus: false,
    repoStatus: true,
    description:
      "A web-based recruitment management application developed to support recruitment and outsourcing processes at PT Humanovation Technology Indonesia. The system provides features for candidate management, job position management, client requests, candidate placements, and role-based access control, enabling a more structured and efficient hiring process.",
  },
  {
    id: 2,
    key: "hutendoSmartHiringManagement",
    title: "Hutendo Smart Hiring Management",
    stacks: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "Prisma ORM",
      "MySQL",
      "Tailwind CSS",
      "JWT",
    ],
    liveUrl: null,
    repoUrl: null,
    status: true,
    image: project2.src,
    liveStatus: false,
    repoStatus: false,
    description:
      "A fullstack web-based hiring management system developed during my internship at PT Humanovation Technology Indonesia. The application streamlines recruitment and outsourcing processes through candidate management, job positions, client requests, candidate placements, and role-based access control, providing an efficient solution for end-to-end hiring workflows.",
  },
];

const ProjectFragment = () => {
  const t = useTranslations("ProjectSection");

  return (
    <>
      <AuthLayout className="pt-32 lg:pb-28" id="projects">
        <BlurFade inView={true} direction="down" offset={10} duration={0.5}>
          <Header>{t("title")}</Header>
        </BlurFade>
        <div className="w-full mt-5 grid grid-cols-1 gap-10 md:gap-12 md:mt-8 lg:mt-10">
          {projects.map((project, i) => (
            <BlurFade
              inView={true}
              direction={"up"}
              duration={0.5}
              offset={10}
              delay={i > 0 ? i * 0.5 : 0.5}
              key={project.id}
            >
              <CardProject key={project.id}>
                <CardProject.LeftContent image={project.image} />
                <CardProject.RightContent
                  title={project.title}
                  stacks={project.stacks}
                  liveUrl={project.liveUrl !== null ? project.liveUrl : ""}
                  repoUrl={project.repoUrl !== null ? project.repoUrl : ""}
                  status={project.status}
                  liveStatus={project.liveStatus}
                  repoStatus={project.repoStatus}
                >
                  {t(`projects.${project.key}.description`)}
                </CardProject.RightContent>
              </CardProject>
            </BlurFade>
          ))}
        </div>
      </AuthLayout>
    </>
  );
};

export default ProjectFragment;
