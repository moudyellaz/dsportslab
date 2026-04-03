import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Disciplines from "./components/Disciplines";
import Training from "./components/Training";
import Events from "./components/events";
import Join from "./components/Join";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Training />
        <Events />
        <Join />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
