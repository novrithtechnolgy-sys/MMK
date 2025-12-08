import Navbar from "../components/Navbar";
import CinematicSection from "../components/Our-Work/CinematicSection";
import CinematicVideoSection from "../components/Our-Work/CinematicVideoSection";
import InteriorPhotography from "../components/Our-Work/InteriorPhotography";
import PerfectForSection from "../components/Our-Work/PerfectForSection";
import SocialMeadiaReel from "../components/Our-Work/SocialMeadiaReel";
import VirtualTourSection from "../components/Our-Work/VirtualTourSection";
import VisualStoriesSection from "../components/Our-Work/VisualStoriesSection";

export const metadata = {
  title: "Our Work | MMK Interiors Portfolio",
  description:
    "Explore our premium interior photography, real estate imagery, and design-focused visuals created for top-tier brands and developers.",
  openGraph: {
    title: "MMK Interiors – Portfolio",
    description:
      "See the interior and real estate photography portfolio from MMK Interiors.",
    url: "https://marketmykeys.com/our-work",
    images: [{ url: "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765015733/zobsdm9fl4lia5svioqy.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMK Interiors Portfolio",
    images: ["https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765015733/zobsdm9fl4lia5svioqy.png"],
  },
};


export default function OurWork() {
    return (
        <>
            <Navbar />
            <VisualStoriesSection />
            <InteriorPhotography />
            <CinematicVideoSection />
            <CinematicSection/>
            <PerfectForSection />
            <SocialMeadiaReel />
            <VirtualTourSection />
        </>
    );
}