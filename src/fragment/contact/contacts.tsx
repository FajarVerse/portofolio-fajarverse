import BtnCard from "@/components/main/btn-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import {
  siGithub,
  siGmail,
  siInstagram,
  SimpleIcon,
  siWhatsapp,
} from "simple-icons";

interface Contact {
  icon: SimpleIcon;
  name: string;
  link: string;
}

const Contacts = () => {
  const contacts: Contact[] = [
    {
      icon: siGmail,
      name: "Email",
      link: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=gifarifajarm174@gmail.com",
    },
    {
      icon: siInstagram,
      name: "Instagram",
      link: "https://www.instagram.com/fajar_verse?igsh=MTBmdTh0MDdiMnVwOQ==",
    },
    {
      icon: siWhatsapp,
      name: "Whatsapp",
      link: "https://wa.me/6283894927117",
    },
    {
      icon: siGithub,
      name: "Github",
      link: "https://github.com/FajarVerse",
    },
  ];

  return (
    <div className="w-full mt-6 flex gap-3 justify-center flex-wrap md:gap-4 xl:mt-8 xl:gap-5">
      {contacts.map((contact, i) => (
        <BlurFade
          key={i}
          inView={true}
          direction={"up"}
          duration={i > 0 ? i * 0.3 : 0.3}
          offset={10}
        >
          <Link href={contact.link} target="_blank">
            <BtnCard className="cursor-pointer flex gap-1.5 items-center px-4 py-2.5 md:py-3 md:text-base lg:text-lg lg:px-5 lg:py-3 lg:gap-2 xl:py-3.5 xl:px-6  xl:text-xl xl:gap-2.5 hover:bg-primary hover:text-background group">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-3.5 lg:size-4 xl:size-6 transition-all duration-300 ease-in-out fill-primary group-hover:fill-background"
              >
                <title>{contact.name}</title>
                <path d={contact.icon.path} />
              </svg>
              {contact.name}
            </BtnCard>
          </Link>
        </BlurFade>
      ))}
      <BlurFade
        inView={true}
        direction={"up"}
        duration={0.3 * contacts.length}
        offset={10}
      >
        <Link
          href={"https://www.linkedin.com/in/gifari-fajar-maulana"}
          target="_blank"
        >
          <BtnCard className="cursor-pointer flex gap-1.5 items-center px-4 py-2.5 md:py-3 md:text-base lg:text-lg lg:px-5 lg:py-3 lg:gap-2 xl:py-3.5 xl:px-6  xl:text-xl xl:gap-2.5 hover:bg-primary hover:text-background group">
            <Linkedin className="size-3.5 lg:size-4 xl:size-6 transition-all duration-300 ease-in-out" />
            LinkedIn
          </BtnCard>
        </Link>
      </BlurFade>
    </div>
  );
};

export default Contacts;
