import Navbar from "../components/Navbar";
import CinematicSection from "../components/Our-Work/CinematicSection";
import CinematicVideoSection from "../components/Our-Work/CinematicVideoSection";
import InteriorPhotography from "../components/Our-Work/InteriorPhotography";
import PerfectForSection from "../components/Our-Work/PerfectForSection";
import SocialMeadiaReel from "../components/Our-Work/SocialMeadiaReel";
import VirtualTourSection from "../components/Our-Work/VirtualTourSection";
import VisualStoriesSection from "../components/Our-Work/VisualStoriesSection";

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