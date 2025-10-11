import AuthLayout from "@/layout/auth-layout";
import AboutBody from "./about-body";
import AboutStack from "./about-stack";

const AboutFragment = () => {
  return (
    <AuthLayout
      className="pt-24 md:pt-36 lg:pt-32 xl:pt-36 xl:px-44"
      id="about"
    >
      <AboutBody />
      <AboutStack />
    </AuthLayout>
  );
};

export default AboutFragment;
