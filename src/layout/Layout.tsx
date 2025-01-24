import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='w-full'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
