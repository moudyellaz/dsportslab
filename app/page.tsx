import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Disciplines from "./components/Disciplines";
import Events from "./components/events";
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
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
