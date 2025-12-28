"use client";

import Header from "@/components/main/header";
import Paragraph from "@/components/main/paragraph";
import AuthLayout from "@/layout/auth-layout";
import Contacts from "./contacts";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { useTranslations } from "next-intl";

const ContactFragment = () => {
  const t = useTranslations("ContactSection");

  return (
    <AuthLayout className="pt-32 pb-28 xl:pt-36 xl:pb-32" id="contact">
      <BlurFade inView={true} direction="down" offset={10} duration={0.5}>
        <Header className="text-center">{t("title")}</Header>
      </BlurFade>
      <div className="w-full mt-3">
        <Paragraph className="text-muted text-center">
          <TextAnimate duration={0.5} startOnView={true} animation={"slideUp"}>
            {t("firstDescription")}
          </TextAnimate>
        </Paragraph>
        <Paragraph className="text-muted text-center">
          <TextAnimate duration={0.5} startOnView={true} animation={"slideUp"}>
            {t("secondDescription")}
          </TextAnimate>
        </Paragraph>
      </div>
      <Contacts />
    </AuthLayout>
  );
};

export default ContactFragment;
