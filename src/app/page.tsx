import ContactCTA from "./components/Home/ContactCTA";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar";
import WhyChoose from "./components/Home/WhyChoose";

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
