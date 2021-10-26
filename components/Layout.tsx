import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">{children}</div>
    </div>
  );
};
