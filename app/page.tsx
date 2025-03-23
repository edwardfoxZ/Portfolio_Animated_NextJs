import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Portfolio from "./sections/Portfolio";
import Stacks from "./sections/Stacks";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Stacks />
      <Services />
      <Contact />
    </>
  );
}
