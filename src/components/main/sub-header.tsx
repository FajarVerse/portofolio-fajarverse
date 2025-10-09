interface SubHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeader = ({ children, className }: SubHeaderProps) => {
  return (
    <h2
      className={`font-overpass font-extrabold text-primary text-2xl md:text-3xl lg:text-3xl xl:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
};

export default SubHeader;
