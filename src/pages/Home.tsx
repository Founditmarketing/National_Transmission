import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { RemanVsRebuild } from '../components/sections/RemanVsRebuild';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <RemanVsRebuild />
      <Contact />
    </>
  );
};
