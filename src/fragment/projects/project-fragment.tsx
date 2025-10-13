import CardProject from "@/components/main/cart-project";
import Header from "@/components/main/header";
import AuthLayout from "@/layout/auth-layout";
import project1 from "../../../public/image/projects/project-1.png";
import { BlurFade } from "@/components/ui/blur-fade";

const projects = [
  {
    id: 1,
    title: "Lugi Store (Eccommerce Fashion)",
    stacks: ["React.js", "laravel", "Tailwind CSS", "Midtrans"],
    liveUrl: null,
    repoUrl: null,
    status: true,
    image: project1.src,
    liveStatus: false,
    repoStatus: true,
    description:
      "This project is a React and Laravel based fashion e-commerce website integrated with Midtrans for payment system, allowing users to shop for fashion products online with a modern look and secure transactions.",
  },
];

const ProjectFragment = () => {
  return (
    <>
      <AuthLayout className="pt-32 lg:pb-28" id="projects">
        <BlurFade inView={true} direction="down" offset={10} duration={0.5}>
          <Header>My Projects</Header>
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
              <CardProject>
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
                  {project.description}
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
