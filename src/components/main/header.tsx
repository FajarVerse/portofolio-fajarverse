'use client';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  return (
    <h1
      className={`font-overpass text-4xl font-extrabold md:text-[2.7rem] lg:text-5xl xl:text-[4rem] ${className}`}
    >
      {children}
    </h1>
  );
};

export default Header;
