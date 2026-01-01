import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-background px-5 py-5 border-t-2 border-muted-foreground/60 md:flex md:justify-between md:px-10 lg:px-24 lg:py-6 xl:px-32 2xl:px-40">
      <h4 className="font-mono font-medium text-base text-muted-foreground text-center mb-2 md:mb-0 md:text-left md:text-sm lg:text-base">
        &copy; 2026 FajarVerse. {t("leftContent")}
      </h4>
      <p className="font-sans font-medium text-base text-muted-foreground text-center md:text-right md:text-sm lg:text-base">
        {t("rightContent")} <span className="text-primary">Next.js</span>
      </p>
    </footer>
  );
};

export default Footer;
