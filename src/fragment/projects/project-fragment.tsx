import CardProject from "@/components/main/cart-project";
import Header from "@/components/main/header";
import AuthLayout from "@/layout/auth-layout";
import projectTest from "../../../public/image/project-test.png";

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum dolor",
    stacks: ["next js", "laravel"],
    liveUrl: "",
    repoUrl: "",
    status: true,
    image: projectTest.src,
  },
  {
    id: 2,
    title: "Lorem Ipsum dolor",
    stacks: ["next js", "laravel"],
    liveUrl: "",
    repoUrl: "",
    status: true,
    image: projectTest.src,
  },
];

const ProjectFragment = () => {
  return (
    <>
      <AuthLayout className="pt-32 lg:pb-28" id="projects">
        <Header>My Projects</Header>
        <div className="w-full mt-5 grid grid-cols-1 gap-10 md:gap-12 md:mt-8 lg:mt-10">
          {projects.map((project) => (
            <CardProject key={project.id}>
              <CardProject.LeftContent image={project.image} />
              <CardProject.RightContent
                title={project.title}
                stacks={project.stacks}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
                status={project.status}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                minus illo, doloribus animi ducimus exercitationem culpa veniam
                beatae perferendis officia!
              </CardProject.RightContent>
            </CardProject>
          ))}
        </div>
      </AuthLayout>
    </>
  );
};

export default ProjectFragment;
