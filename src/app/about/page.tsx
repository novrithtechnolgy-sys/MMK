import Navbar from "../components/Navbar";
import AboutUs from "../components/About/About";
import WorkBlendSection from "../components/About/WorkBlendSection";
import MissionSection from "../components/About/MissionSection";
import WhyClientsTrustUs from "../components/About/WhyClientsTrustUs";

export const metadata = {
  title: "About Us | Details of MMK Interiors",
  description:
    "Learn about MMK Interiors — a team dedicated to premium interior photography, real estate visuals, and creative design storytelling.",
  openGraph: {
    title: "About MMK Interiors",
    description:
      "The story and people behind MMK Interiors — where creativity meets precision.",
    url: "https://marketmykeys.com/about",
    images: [{ url: "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764658979/cwfjk90rak9q6brbyg0u.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MMK Interiors",
    images: ["https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764658979/cwfjk90rak9q6brbyg0u.jpg"],
  },
};


export default function About() {
    return (
        <>
            <Navbar />
            <AboutUs />
            <WorkBlendSection />
            <MissionSection/>
            <WhyClientsTrustUs/>
        </>
    );
}