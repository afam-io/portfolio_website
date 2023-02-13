import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
