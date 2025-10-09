import Header from "@/components/main/header";
import Paragraph from "@/components/main/paragraph";

const AboutBody = () => {
  return (
    <>
      <Header>About Me</Header>
      <div className="w-full mt-4 lg:mt-5 xl:mt-7">
        <Paragraph>
          Hi, I'm Gifari Fajar Maulana, a{" "}
          <span className="text-primary">
            fullstack developer an front-end developer
          </span>{" "}
          passionate about building{" "}
          <span className="text-primary">
            modern, interactive, and responsive
          </span>{" "}
          web applications. I’m currently studying at Politeknik LP3I Jakarta,
          focusing on both front-end and back-end development to create{" "}
          <span className="text-primary">meaningful digital experiences.</span>
        </Paragraph>
        <Paragraph className="mt-3 xl:mt-5">
          I’m deeply passionate about{" "}
          <span className="text-primary">continuous learnin</span>g and staying
          updated with the{" "}
          <span className="text-primary">latest technologies</span>. Each
          project I take on is a chance to explore{" "}
          <span className="text-primary">creative ideas</span>, sharpen my{" "}
          <span className="text-primary">technical skills</span>, and deliver{" "}
          <span className="text-primary">effective solutions</span> to
          real-world challenges in the digital space.
        </Paragraph>
        <Paragraph className="mt-3 xl:mt-5">
          Beyond functionality, I also focus on{" "}
          <span className="text-primary">
            design and user experience (UI/UX)
          </span>{" "}
          to ensure every digital product I build is not only efficient but also{" "}
          <span className="text-primary">engaging and intuitive</span> to use. I
          believe technology is more than just a tool — it’s a{" "}
          <span className="text-primary">
            bridge between ideas and meaningful
          </span>{" "}
          impact for people.
        </Paragraph>
      </div>
    </>
  );
};

export default AboutBody;
