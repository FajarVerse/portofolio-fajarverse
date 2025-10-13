import Header from "@/components/main/header";
import Paragraph from "@/components/main/paragraph";
import AuthLayout from "@/layout/auth-layout";
import Contacts from "./contacts";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

const ContactFragment = () => {
  return (
    <AuthLayout className="pt-32 pb-28 xl:pt-36 xl:pb-32" id="contact">
      <BlurFade inView={true} direction="down" offset={10} duration={0.5}>
        <Header className="text-center">Lets Connect</Header>
      </BlurFade>
      <div className="w-full mt-3">
        <Paragraph className="text-muted text-center">
          <TextAnimate duration={0.5} startOnView={true} animation={"slideUp"}>
            Let’s build something amazing together.
          </TextAnimate>
        </Paragraph>
        <Paragraph className="text-muted text-center">
          <TextAnimate duration={0.5} startOnView={true} animation={"slideUp"}>
            Every great project starts with a simple conversation — let’s start
            ours.
          </TextAnimate>
        </Paragraph>
      </div>
      <Contacts />
    </AuthLayout>
  );
};

export default ContactFragment;
