"use client";

import Header from "@/components/main/header";
import Paragraph from "@/components/main/paragraph";
import { BlurFade } from "@/components/ui/blur-fade";
import { useTranslations } from "next-intl";

const AboutBody = () => {
  const t = useTranslations("AboutSection");

  return (
    <>
      <BlurFade inView={true} direction="down" offset={10} duration={0.5}>
        <Header>{t("title")}</Header>
      </BlurFade>
      <BlurFade inView={true} direction={"right"} offset={10} duration={0.5}>
        <div className="w-full mt-4 lg:mt-5 xl:mt-7">
          <Paragraph>
            {t.rich("firstParagraph", {
              highlight: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </Paragraph>

          <Paragraph className="mt-3 xl:mt-5">
            {t.rich("secondParagraph", {
              highlight: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </Paragraph>
          <Paragraph className="mt-3 xl:mt-5">
            {t.rich("thirdParagraph", {
              highlight: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </Paragraph>
        </div>
      </BlurFade>
    </>
  );
};

export default AboutBody;
