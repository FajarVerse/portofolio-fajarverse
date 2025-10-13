import Header from "@/components/main/header";
import Paragraph from "@/components/main/paragraph";
import AuthLayout from "@/layout/auth-layout";
import Contacts from "./contacts";

const ContactFragment = () => {
  return (
    <AuthLayout className="pt-32 pb-28 xl:pt-36 xl:pb-32" id="contact">
      <Header className="text-center">Lets Connect</Header>
      <div className="w-full mt-3">
        <Paragraph className="text-muted text-center">
          Let’s build something amazing together.
        </Paragraph>
        <Paragraph className="text-muted text-center">
          Every great project starts with a simple conversation — let’s start
          ours.
        </Paragraph>
      </div>
      <Contacts />
    </AuthLayout>
  );
};

export default ContactFragment;
