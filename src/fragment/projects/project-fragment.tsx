import CardProject from "@/components/main/cart-project";
import Header from "@/components/main/header";
import AuthLayout from "@/layout/auth-layout";
import projectTest from "../../../public/image/project-test.png";

const ProjectFragment = () => {
  return (
    <>
      <AuthLayout className="pt-32 lg:pb-28" id="projects">
        <Header>My Projects</Header>
        <div className="w-full mt-5 grid grid-cols-1 gap-10 md:gap-12 md:mt-8 lg:mt-10">
          {/* <CardProject>
            <CardProject.Header image={projectTest.src} />
            <CardProject.Body title="Lugi Store">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus temporibus earum architecto ipsa! Sit nesciunt culpa
              adipisci odit et.
            </CardProject.Body>
            <CardProject.Footer liveUrl="" repoUrl="" status={true} />
          </CardProject> */}
          <CardProject>
            <CardProject.LeftContent image={projectTest.src} />
            <CardProject.RightContent
              title="Lorem Ipsum dolor"
              stacks={["next js", "laravel"]}
              liveUrl=""
              repoUrl=""
              status={true}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              minus illo, doloribus animi ducimus exercitationem culpa veniam
              beatae perferendis officia!
            </CardProject.RightContent>
          </CardProject>
        </div>
      </AuthLayout>
    </>
  );
};

export default ProjectFragment;
