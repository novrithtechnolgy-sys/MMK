import ContactCTA from "./components/ContactCTA";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <WhyChoose />
      <ContactCTA />
    </>
  );
}
