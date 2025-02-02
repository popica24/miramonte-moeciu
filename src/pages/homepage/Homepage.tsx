import About from './components/About';
import Hero from './components/Hero';
import Images from './components/Images';
import Pricing from './components/Pricing';
import Rules from './components/Rules';
import Testimonials from './components/Testimonials';

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Images />
      <Rules />
      <Pricing />
      <Testimonials />
    </>
  );
};

export default Homepage;
