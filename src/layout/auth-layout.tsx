interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const AuthLayout = ({ children, className, id }: AuthLayoutProps) => {
  return (
    <main
      className={`container mx-auto pb-20 w-full px-6 relative md:px-16 lg:px-28 xl:px-40 2xl:px-56 ${className}`}
      id={id}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
