import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

/* 

      <div className='flex'>
        <Sidebar />
        <div>
          <Main />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
*/
