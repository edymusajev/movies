import { Navbar } from './Navbar';
import NextNProgress from 'nextjs-progressbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <Navbar />
      <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">{children}</div>
    </div>
  );
};
