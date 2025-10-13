'use client';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={`font-sans font-medium text-base text-muted-foreground md:text-lg xl:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
