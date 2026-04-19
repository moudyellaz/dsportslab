import Navbar from "../components/Navbar";
import Events from "../components/events";
import Footer from "../components/Footer";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Events />
      </main>
      <Footer />
    </>
  );
}
