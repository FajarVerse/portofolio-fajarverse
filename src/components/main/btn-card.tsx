'use client';

interface BtnCardProps {
  children: React.ReactNode;
  className?: string;
}

const BtnCard = ({ children, className }: BtnCardProps) => {
  return (
    <button
      className={`px-3 py-1.5 border border-primary text-sm font-mono font-medium md:px-4 md:py-2 md:text-base lg:text-sm lg:py-1.5 lg:px-3 xl:px-4 xl:py-1.5 xl:text-sm xl:border-2 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default BtnCard;
