import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Disciplines from "./components/Disciplines";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
