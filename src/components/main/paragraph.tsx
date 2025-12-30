"use client";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <div
      className={`font-sans font-medium text-base text-muted-foreground md:text-lg xl:text-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
